import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/app-error";

const confirmUpdateService = async (userId: string, codeFromFront: string) => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!user.updateCode || !user.updateCodeExpires) {
    throw new AppError("No pending update request", 400);
  }

  if (new Date() > user.updateCodeExpires) {
    throw new AppError("Code expired", 400);
  }

  if (user.updateAttempts >= 5) {
    throw new AppError("Too many attempts. Request a new code.", 403);
  }

  const isValidCode = await compare(codeFromFront, user.updateCode);

  if (!isValidCode) {
    user.updateAttempts += 1;
    await userRepository.save(user);
    throw new AppError("Invalid confirmation code", 400);
  }

  if (user.emailToUpdate) {
    user.email = user.emailToUpdate;
  }

  if (user.passwordToUpdate) {
    user.password = user.passwordToUpdate;
  }

  user.updateCode = null;
  user.updateCodeExpires = null;
  user.emailToUpdate = null;
  user.passwordToUpdate = null;
  user.updateAttempts = 0;

  await userRepository.save(user);

  return { message: "Update completed successfully" };
};

export default confirmUpdateService;
