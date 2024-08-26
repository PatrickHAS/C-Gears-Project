import { Request, Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await userDeleteService(id);

  return res.status(200).json({ message: "user successfully deactivated!" });
};
export default userDeleteController;
