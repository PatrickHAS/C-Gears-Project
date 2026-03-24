import { Request, Response } from "express";
import { linkAccountService } from "../../services/linked-account/link-account.service";

export const linkAccountController = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const { provider, providerId, gamertag } = req.body;

  const result = await linkAccountService({
    userId,
    provider,
    providerId,
    gamertag,
  });

  return res.status(201).json(result);
};
