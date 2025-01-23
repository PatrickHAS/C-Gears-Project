import { Router } from "express";
import userCreateController from "../../controllers/user/user-create.controller";
import ensureAuthMiddleware from "../../middlewares/ensure-auth.middleware";
import verifyAdmMiddleware from "../../middlewares/verify-adm.middleware";
import userListController from "../../controllers/user/user-list.controller";
import userDataController from "../../controllers/user/user-data.controller";
import userUpdateController from "../../controllers/user/user-update.controller";
import userDisableController from "../../controllers/user/user-disable.controller";
import validateCreateUserMiddleware from "../../middlewares/validate-create-user.middleware";
import confirmUpdateController from "../../controllers/user/confirm-update.controller";
import userActivateController from "../../controllers/user/user-activate.controller";
import userEmailDataController from "../../controllers/user/user-emailData.controller";
import userResetPasswordController from "../../controllers/user/user-reset-pass.controller";

const userRoutes = Router();

userRoutes.post("/confirm-email", userEmailDataController);
userRoutes.patch("/pass-reset/:id/:token", userResetPasswordController);
userRoutes.post("", validateCreateUserMiddleware, userCreateController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  userListController
);
userRoutes.get("/:id", ensureAuthMiddleware, userDataController);
userRoutes.patch("/:id", ensureAuthMiddleware, userUpdateController);
userRoutes.patch(
  "/confirm-update/:token",
  ensureAuthMiddleware,
  confirmUpdateController
);
userRoutes.delete("/:id", ensureAuthMiddleware, userDisableController);
userRoutes.delete(
  "/active-user/:id",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  userActivateController
);

export default userRoutes;
