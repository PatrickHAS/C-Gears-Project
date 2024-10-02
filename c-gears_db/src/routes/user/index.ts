import { Router } from "express";
import userCreateController from "../../controllers/user/userCreate.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyAdm.middleware";
import userListController from "../../controllers/user/userList.controller";
import userDataController from "../../controllers/user/userData.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";
import userDisableController from "../../controllers/user/userDisable.controller";
import validateSSNMiddleware from "../../middlewares/validateSSN.middleware";
import validateCreateUserMiddleware from "../../middlewares/validateCreateUser.middleware";
import confirmUpdateController from "../../controllers/user/confirmUpdate.controller";
import userActivateController from "../../controllers/user/userActivate.controller";

const userRoutes = Router();

userRoutes.post(
  "/register",
  validateSSNMiddleware,
  validateCreateUserMiddleware,
  userCreateController
);
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
