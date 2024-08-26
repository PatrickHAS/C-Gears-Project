import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces";
import { Users } from "../../entities/user.entity";

const updateUserService = async (
  { name, surname, username, email, cellphone, birthday }: IUserUpdate,
  id: string,
  tokenId: string
): Promise<Users | Array<string>> => {
  const userRepository = AppDataSource.getRepository(Users);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (id !== tokenId) {
    throw new AppError("Unauthorized access", 401);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    surname: surname ? surname : findUser.surname,
    username: username ? username : findUser.username,
    email: email ? email : findUser.email,
    cellphone: cellphone ? cellphone : findUser.cellphone,
    birthday: birthday ? birthday : findUser.birthday,
  });

  const user = await userRepository.findOneBy({ id });
  return user!;
};
export default updateUserService;
