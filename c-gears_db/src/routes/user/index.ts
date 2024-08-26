import { Router } from "express";
import userCreateController from "../../controllers/user/userCreate.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyAdm.middleware";
import userListController from "../../controllers/user/userList.controller";
import userDataController from "../../controllers/user/userData.controller";
import userUpdateController from "../../controllers/user/userUpdate.controller";
import userDeleteController from "../../controllers/user/userDelete.controller";

const userRoutes = Router();

userRoutes.post("", userCreateController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  userListController
);
userRoutes.get("/:id", ensureAuthMiddleware, userDataController);
userRoutes.patch("", ensureAuthMiddleware, userUpdateController);
userRoutes.delete("", ensureAuthMiddleware, userDeleteController);

export default userRoutes;
