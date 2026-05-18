import AppDataSource from "../../data-source";
import { Request, Response } from "express";
import { StripePaymentsService } from "../../services/stripe-payment/stripe-payments.service";
import { Users } from "../../entities/user.entity";
import { Payment } from "../../entities/user-payment";

export class StripePaymentsController {
  private service: StripePaymentsService;

  constructor() {
    const userRepo = AppDataSource.getRepository(Users);
    const paymentsRepo = AppDataSource.getRepository(Payment);

    this.service = new StripePaymentsService(
      AppDataSource,
      userRepo,
      paymentsRepo,
    );
  }

  async createIntent(req: Request, res: Response) {
    try {
      const result = await this.service.createStripeSession(req.user?.id!);
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async handleWebhook(req: Request, res: Response) {
    const sig = req.headers["stripe-signature"] as string;

    try {
      const event = this.service.constructEvent(req.body, sig);

      if (event.type === "payment_intent.succeeded") {
        const intent = event.data.object as any;
        await this.service.handleStripeWebhook(intent.id);
      }

      return res.status(200).send({ received: true });
    } catch (err: any) {
      console.error(`Webhook error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  }
}
