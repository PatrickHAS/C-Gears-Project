import { Router } from "express";
import { StripePaymentsController } from "../../controllers/stripe-payment/stripe-payments.controller";
import ensureAuthMiddleware from "../../middlewares/ensure-auth.middleware";

export const stripeRoutes = Router();
const stripeController = new StripePaymentsController();

stripeRoutes.post("/", (req, res) => stripeController.handleWebhook(req, res));

stripeRoutes.post("/create-intent", ensureAuthMiddleware, (req, res) =>
  stripeController.createIntent(req, res),
);
