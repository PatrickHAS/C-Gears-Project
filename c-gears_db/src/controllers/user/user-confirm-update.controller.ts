import { Request, Response } from "express";
import confirmUpdateService from "../../services/users/user-confirm-update.service";

const confirmUpdateController = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { code } = req.body;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const result = await confirmUpdateService(userId, code);

  return res.status(200).json(result);
};
export default confirmUpdateController;
