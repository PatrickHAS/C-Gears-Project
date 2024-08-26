import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import updateUserService from "../../services/users/updateUser.service";
import { IUserUpdate } from "../../interfaces";
import { AppError } from "../../errors/appError";

const userUpdateController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id: string = req.params.id;
  const token = req.user.id;

  const bodyKeys = Object.keys(req.body);

  if (bodyKeys.includes("id")) {
    throw new AppError("Unauthorized access", 401);
  }

  const updatedUser = await updateUserService(user, id, token);
  return res.status(200).json(instanceToPlain(updatedUser));
};
export default userUpdateController;
