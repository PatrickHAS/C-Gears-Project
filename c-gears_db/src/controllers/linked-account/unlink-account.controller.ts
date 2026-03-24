import { Request, Response } from "express";
import { unlinkAccountService } from "../../services/linked-account/unlink_account.service";

export const unlinkAccountController = async (req: Request, res: Response) => {
  const userId = req.user!.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }
  const { linkedId } = req.params as unknown as { linkedId: string };

  const result = await unlinkAccountService(userId, linkedId);

  return res.json(result);
};
