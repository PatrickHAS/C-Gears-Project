import { Request, Response } from "express";
import confirmUpdateService from "../../services/users/user-confirm-update.service";

const confirmUpdateController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { code } = req.body;

  const result = await confirmUpdateService(userId, code);

  return res.status(200).json(result);
};
export default confirmUpdateController;
