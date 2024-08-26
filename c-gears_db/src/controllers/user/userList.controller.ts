import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import userListService from "../../services/users/userList.service";

const userListController = async (req: Request, res: Response) => {
  const adm: boolean = req.user.isAdm;
  const users = await userListService(adm);

  return res.status(200).json(instanceToPlain(users));
};
export default userListController;
