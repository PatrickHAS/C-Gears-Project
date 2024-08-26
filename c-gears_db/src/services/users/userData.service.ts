import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userDataService = async (userId: string): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.findOneBy({ id: userId });

  if (!users) {
    throw new AppError("User not found", 404);
  }

  return users!;
};
export default userDataService;
