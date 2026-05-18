import { Router } from "express";
import userCreateController from "../../controllers/user/user-create.controller";
import ensureAuthMiddleware from "../../middlewares/ensure-auth.middleware";
import verifyAdmMiddleware from "../../middlewares/verify-adm.middleware";
import userListController from "../../controllers/admin/admin-user-list.controller";
import userDataController from "../../controllers/user/user-data.controller";
import userUpdateController from "../../controllers/user/user-update.controller";
import userDisableController from "../../controllers/user/user-disable.controller";
import validateCreateUserMiddleware from "../../middlewares/validate-create-user.middleware";
import confirmUpdateController from "../../controllers/user/user-confirm-update.controller";
import userActivateController from "../../controllers/user/user-activate.controller";
import userEmailDataController from "../../controllers/user/user-emailData.controller";
import userResetPasswordController from "../../controllers/user/user-reset-pass.controller";
import adminUpdateUserPlanTypeController from "../../controllers/admin/admin-user-planType-update.controller";

const userRoutes = Router();

userRoutes.post("/confirm-email", userEmailDataController);
userRoutes.post("", validateCreateUserMiddleware, userCreateController);

userRoutes.patch("/pass-reset/:id/:token", userResetPasswordController);
userRoutes.patch(
  "/plan-type-update",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  adminUpdateUserPlanTypeController,
);
userRoutes.patch("/:id", ensureAuthMiddleware, userUpdateController);
userRoutes.patch(
  "/confirm-update",
  ensureAuthMiddleware,
  confirmUpdateController,
);

userRoutes.get("/:id", ensureAuthMiddleware, userDataController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  userListController,
);

userRoutes.delete("/:id", ensureAuthMiddleware, userDisableController);
userRoutes.delete(
  "/active-user/:id",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  userActivateController,
);

export default userRoutes;
