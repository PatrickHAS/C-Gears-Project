import { Router } from "express";
import ensureAuthMiddleware from "../../middlewares/ensure-auth.middleware";
import { linkAccountController } from "../../controllers/linked-account/link-account.controller";
import { unlinkAccountController } from "../../controllers/linked-account/unlink-account.controller";
import likedAccountMeController from "../../controllers/linked-account/accounts-linked-me.controller";
import activateLinkedAccountController from "../../controllers/linked-account/activate-linked-account.controller";
import { steamLinkController } from "../../controllers/linked-account/steam-link.controller";
import { Request, Response, NextFunction } from "express";
import passport from "passport";

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

linkedAccountRoutes.get("/auth/steam", (req, res, next) => {
  const userId = req.query.state as string; // O seu frontend está enviando o base64 aqui

  if (userId) {
    // Salva o userId (em base64) num cookie seguro
    res.cookie("steam_link_state", userId, {
      httpOnly: true,
      maxAge: 5 * 60 * 1000, // 5 minutos
    });
  }

  return passport.authenticate("steam", { session: false })(req, res, next);
});

linkedAccountRoutes.get(
  "/auth/steam/callback",
  (req: Request, res: Response, next: NextFunction) => {
    // 1. Pegamos o state que a Steam devolveu na URL
    const state = req.query.state as string;

    passport.authenticate(
      "steam",
      { session: false },
      (err: unknown, user: any) => {
        if (err || !user) {
          return res.redirect("http://localhost:5173/error");
        }

        // 2. Injetamos o user e o state de volta no request
        req.user = user;

        // IMPORTANTE: Se o req.query.state sumiu, nós o reinjetamos aqui
        // para que o steamLinkController consiga ler.
        if (state) req.query.state = state;

        return next();
      },
    )(req, res, next);
  },
  steamLinkController,
);
