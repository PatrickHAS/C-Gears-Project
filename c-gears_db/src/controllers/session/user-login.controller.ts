import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces";
import createSessionService from "../../services/session/user-login.service";

const createSessionController = async (req: Request, res: Response) => {
  try {
    const data: IUserLogin = req.body;
    return res.json(await createSessionService(data));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({
        message: error.message,
      });
    }
  }
};
export default createSessionController;
