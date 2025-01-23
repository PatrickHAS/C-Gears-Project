import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/app-error";
import "dotenv";
import { IUserLogin } from "../../interfaces";
import { Users } from "../../entities/user.entity";
import { compare } from "bcrypt";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();
  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new AppError("Incorrect password or email", 401);
  }

  if (!account?.isActive) {
    throw new AppError(
      "Your account has been deactivated. Please contact support for more information.",
      403
    );
  }

  const passwordMatch = await compare(password, account.password);

  if (!passwordMatch) {
    throw new AppError("Incorrect password or email", 401);
  }

  const token = jwt.sign(
    {
      availability: account.availability,
      isAdm: account.isAdm,
      isActive: account.isActive,
    },

    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: account.id,
    }
  );

  const userId = account.id;
  const isAvailability = account.availability;

  return { token, userId, isAvailability };
};
export default createSessionService;
