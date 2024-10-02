import { Request, Response } from "express";
import userDisableService from "../../services/users/userDisable.service";

const userDisableController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await userDisableService(id);

  return res.status(200).json({ message: "user successfully deactivated!" });
};
export default userDisableController;
