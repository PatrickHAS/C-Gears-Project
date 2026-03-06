import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import userUpdateService from "../../services/users/user-update.service";
import { IIdParams, IUserUpdate } from "../../interfaces";

const userUpdateController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;

  const { id } = req.params as unknown as IIdParams;
  const token = req.user.id as string;

  const updatedUser = await userUpdateService(user, id, token);

  return res.status(200).json(instanceToPlain(updatedUser));
};

export default userUpdateController;
