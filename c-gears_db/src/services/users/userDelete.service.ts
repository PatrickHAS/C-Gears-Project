import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userDeleteService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.isActive === false) {
    throw new AppError("User inactive", 401);
  }

  await userRepository.update({ id }, { isActive: false });
};
export default userDeleteService;
