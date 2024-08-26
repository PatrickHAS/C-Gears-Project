import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserCreate } from "../../interfaces";
import userCreateService from "../../services/users/createUser.service";

const userCreateController = async (req: Request, res: Response) => {
  const user: IUserCreate = req.body;
  const createdUser = await userCreateService(user);
  return res.status(201).json(instanceToPlain(createdUser));
};
export default userCreateController;
