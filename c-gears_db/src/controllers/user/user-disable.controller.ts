import { Request, Response } from "express";
import userDisableService from "../../services/users/user-disable.service";
import { IIdParams } from "../../interfaces";

const userDisableController = async (req: Request, res: Response) => {
  const { id } = req.params as unknown as IIdParams;

  await userDisableService(id);

  return res.status(200).json({ message: "user successfully deactivated!" });
};
export default userDisableController;
