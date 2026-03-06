import { Request, Response } from "express";
import linkAccountMeService from "../../services/linked-account/accounts-linked-me.service";

const likedAccountMeController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const linkedAccounts = await linkAccountMeService(userId);

  return res.status(200).json(linkedAccounts);
};
export default likedAccountMeController;
