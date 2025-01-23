import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import userUpdateService from "../../services/users/user-update.service";
import { IUserUpdate } from "../../interfaces";
import { AppError } from "../../errors/app-error";

const userUpdateController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;
  const token = req.user.id;

  const bodyKeys = Object.keys(req.body);

  if (bodyKeys.includes("id")) {
    throw new AppError("Unauthorized access", 401);
  }

  const updatedUser = await userUpdateService(user, id, token);
  return res.status(200).json(instanceToPlain(updatedUser));
};
export default userUpdateController;
