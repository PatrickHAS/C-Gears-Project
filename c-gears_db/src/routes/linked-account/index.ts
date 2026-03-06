import { Router } from "express";
import ensureAuthMiddleware from "../../middlewares/ensure-auth.middleware";
import { linkAccountController } from "../../controllers/linked-account/link-account.controller";
import { unlinkAccountController } from "../../controllers/linked-account/unlink-account.controller";
import likedAccountMeController from "../../controllers/linked-account/accounts-linked-me.controller";
import activateLinkedAccountController from "../../controllers/linked-account/activate-linked-account.controller";

export const linkedAccountRoutes = Router();

linkedAccountRoutes.post("/link", ensureAuthMiddleware, linkAccountController);

linkedAccountRoutes.patch(
  "/unlink/:linkedId",
  ensureAuthMiddleware,
  unlinkAccountController,
);

linkedAccountRoutes.patch(
  "/activate/:linkedId",
  ensureAuthMiddleware,
  activateLinkedAccountController,
);

linkedAccountRoutes.get("/me", ensureAuthMiddleware, likedAccountMeController);
