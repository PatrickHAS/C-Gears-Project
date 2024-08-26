import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userDataService from "../../services/users/userData.service";

const userDataController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const users = await userDataService(userId);

  return res.status(200).json(instanceToPlain(users));
};
export default userDataController;
