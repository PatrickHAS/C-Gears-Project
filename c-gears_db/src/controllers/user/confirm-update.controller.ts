import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/app-error";

const confirmUpdateController = async (req: Request, res: Response) => {
  const { token } = req.params;
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ updateToken: token });

  if (!user) {
    throw new AppError("Invalid or expired token", 400);
  }

  await userRepository.update(user.id, {
    email: user.emailToUpdate || undefined,
    password: user.passwordToUpdate || undefined,
    updateToken: null,
    emailToUpdate: null,
    passwordToUpdate: null,
  });

  res.status(200).json({ message: "Data updated successfully!" });
};
export default confirmUpdateController;
