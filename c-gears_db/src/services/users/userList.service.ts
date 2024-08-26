import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userListService = async (adm: boolean): Promise<Users[]> => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  if (adm === false) {
    throw new AppError(
      "Access denied. You do not have permission to view this resource.",
      403
    );
  }

  return users;
};
export default userListService;
