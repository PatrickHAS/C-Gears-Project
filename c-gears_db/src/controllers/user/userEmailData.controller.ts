import { Request, Response } from "express";
import userEmailDataService from "../../services/users/userEmailData.service";

const userEmailDataController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const emailUser = await userEmailDataService(email);

  return res.status(200).json(emailUser);
};
export default userEmailDataController;
