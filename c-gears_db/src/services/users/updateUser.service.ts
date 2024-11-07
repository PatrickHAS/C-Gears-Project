import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces";
import { Users } from "../../entities/user.entity";
import { hash } from "bcrypt";
import emailService from "./email.service";
import jwt from "jsonwebtoken";
import "dotenv/config";

const updateUserService = async (
  {
    name,
    surname,
    username,
    email,
    cellphone,
    birthday,
    password,
  }: IUserUpdate,
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
    name: name ? name : findUser!.name,
    surname: surname ? surname : findUser!.surname,
    username: username ? username : findUser!.username,
    email: email ? email : findUser!.email,
    cellphone: cellphone ? cellphone : findUser!.cellphone,
    birthday: birthday ? birthday : findUser!.birthday,
  });

  const generateUpdateToken = (userId: string): string => {
    const token = jwt.sign(
      {
        id: userId,
      },
      process.env.SECRET_KEY as string,
      { expiresIn: "15m" }
    );

    return token;
  };

  if (email || password) {
    const updateToken = generateUpdateToken(findUser.id);
    const hashedPassword = await hash(password!, 10);

    await userRepository.update(id, {
      updateToken,
      emailToUpdate: email ? email : findUser!.email,
      passwordToUpdate: hashedPassword ? hashedPassword : findUser!.password,
    });

    await emailService().sendEmail(
      findUser!.email,
      "Confirmation of Data Change",
      `Hello, ${
        findUser!.username
      }! We have received a request to reset the password or email for the GEARS CLUB account associated with this email address. Please click the link below to confirm the password or email update: ${
        process.env.DB_HOST
      }:${process.env.PORT}/users/confirm-update/${updateToken}`,
      `
      <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
      <p>Hello, ${findUser!.username}!</p>
      <p>We have received a request to reset the password or email for the GEARS CLUB account associated with this email address.</p>
      <p>Please click the link below to confirm the password or email update:</p>
      <a href="${process.env.DB_HOST}:${
        process.env.PORT
      }/users/confirm-update/${updateToken}">Click here to confirm the update</a>
      <p>If the above link doesn't work, copy and paste the following URL into your browser:</p>
      <p>${process.env.DB_HOST}:${
        process.env.PORT
      }/users/confirm-update/${updateToken}</p>
      `
    );

    return [
      "A confirmation email has been sent to your current email address.",
    ];
  }

  const user = await userRepository.findOneBy({ id });
  return user!;
};
export default updateUserService;
