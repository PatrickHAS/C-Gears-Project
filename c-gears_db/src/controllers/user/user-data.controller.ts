import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userDataService from "../../services/users/user-data.service";

const userDataController = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const users = await userDataService(userId);

  return res.status(200).json(instanceToPlain(users));
};
export default userDataController;
