import { Request, Response } from "express";
import { IUserResetPass } from "../../../src/interfaces";
import userResetPasswordService from "../../services/users/user-reset-pass.service";
import { AppError } from "../../errors/app-error";

const userResetPasswordController = async (req: Request, res: Response) => {
  const pass: IUserResetPass = req.body;
  const { id } = req.params;
  const paramsToken: string = req.params.token;

  if (!pass.password) {
    throw new AppError("Password is required", 400);
  }

  const updatePass = await userResetPasswordService(pass, id, paramsToken);
  return res.status(200).json(updatePass);
};
export default userResetPasswordController;
