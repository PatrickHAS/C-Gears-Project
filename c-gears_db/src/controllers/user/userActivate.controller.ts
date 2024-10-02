import { Request, Response } from "express";
import userActivateService from "../../services/users/userActivate.service";

const userActivateController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await userActivateService(id);

  return res.status(200).json({ message: "user successfully reactivated!" });
};
export default userActivateController;
