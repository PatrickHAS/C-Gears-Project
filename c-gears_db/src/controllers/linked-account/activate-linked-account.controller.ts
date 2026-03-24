import { Request, Response } from "express";
import activateLinkedAccountService from "../../services/linked-account/activate-linked-account.service";

const activateLinkedAccountController = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const { linkedId } = req.params as unknown as { linkedId: string };

  const result = await activateLinkedAccountService(userId, linkedId);

  return res.status(200).json(result);
};

export default activateLinkedAccountController;
