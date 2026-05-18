import { Repository, DataSource } from "typeorm";
import { Payment } from "../../entities/user-payment";
import { Users } from "../../entities/user.entity";
import Stripe from "stripe";

export class StripePaymentsService {
  private stripe: InstanceType<typeof Stripe>;

  constructor(
    private dataSource: DataSource,
    private userRepo: Repository<Users>,
    private paymentsRepo: Repository<Payment>,
  ) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-03-25.dahlia",
    });
  }

  constructEvent(payload: any, sig: string) {
    return this.stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  }

  async createStripeSession(userId: string) {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new Error("User not found");

    if (user.planType === "premium") {
      throw new Error("You are already a Premium member.");
    }

    const existingPayment = await this.paymentsRepo.findOne({
      where: {
        user: { id: userId },
        status: "pending",
        provider: "stripe",
      },
      order: { createdAt: "DESC" },
    });

    if (existingPayment) {
      const intent = await this.stripe.paymentIntents.retrieve(
        existingPayment.providerTransactionId,
      );

      return { clientSecret: intent.client_secret };
    }

    let stripeCustomerId = user.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await this.stripe.customers.create({
        email: user.email,
        name: `${user.name} ${user.surname}`,
      });
      stripeCustomerId = customer.id;
      await this.userRepo.update(user.id, { stripeCustomerId });
    }

    const intent = await this.stripe.paymentIntents.create({
      amount: 600,
      currency: "usd",
      customer: stripeCustomerId,
      metadata: { userId: user.id },
    });

    const newPayment = this.paymentsRepo.create({
      provider: "stripe",
      providerTransactionId: intent.id,
      method: "credit_card",
      status: "pending",
      amount: 6.0,
      user: user,
    });

    await this.paymentsRepo.save(newPayment);
    return { clientSecret: intent.client_secret };
  }

  async handleStripeWebhook(paymentIntentId: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    console.log("Webhook recebido para o Intent:", paymentIntentId);

    try {
      const payment = await queryRunner.manager.findOne(Payment, {
        where: { providerTransactionId: paymentIntentId },
        relations: ["user"],
      });

      if (payment && payment.status !== "succeeded") {
        payment.status = "succeeded";
        await queryRunner.manager.save(payment);

        const user = payment.user;
        user.planType = "premium";
        user.availability = true;
        await queryRunner.manager.save(user);
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
