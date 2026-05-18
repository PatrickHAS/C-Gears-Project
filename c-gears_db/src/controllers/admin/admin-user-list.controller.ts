import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import adminUserListService from "../../services/admin/admin-user-list.service";

const adminUserListController = async (req: Request, res: Response) => {
  const users = await adminUserListService();

  return res.status(200).json(instanceToPlain(users));
};
export default adminUserListController;
