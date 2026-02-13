import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app-error";
import { IUserUpdate } from "../../interfaces";
import { Users } from "../../entities/user.entity";
import { hash } from "bcrypt";
import emailService from "./email.service";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userUpdateService = async (
  data: IUserUpdate,
  id: string,
  tokenId: string,
): Promise<Users | { message: string }> => {
  const userRepository = AppDataSource.getRepository(Users);

  const findUser = await userRepository.findOne({
    where: { id },
    relations: { address: true },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (id !== tokenId) {
    throw new AppError("Unauthorized access", 401);
  }

  const hasEmptyField = Object.values(data).some(
    (value) => typeof value === "string" && value.trim() === "",
  );

  if (hasEmptyField) {
    throw new AppError("Submitting empty fields is not allowed", 400);
  }

  if (data.username) {
    if (data.username === findUser.username) {
      throw new AppError("You already use that name", 400);
    }

    const usernameExists = await userRepository.findOne({
      where: { username: data.username },
    });

    if (usernameExists && usernameExists.id !== findUser.id) {
      throw new AppError("Username already exists", 409);
    }
  }

  if (data.email) {
    const emailExists = await userRepository.findOne({
      where: { email: data.email },
    });

    if (emailExists && emailExists.id !== findUser.id) {
      throw new AppError("Email already exists", 409);
    }
  }

  if (data.cellphone) {
    const cellphoneExists = await userRepository.findOne({
      where: { cellphone: data.cellphone },
    });

    if (cellphoneExists && cellphoneExists.id !== findUser.id) {
      throw new AppError("Cellphone already exists", 409);
    }
  }

  findUser.name = data.name ?? findUser.name;
  findUser.surname = data.surname ?? findUser.surname;
  findUser.username = data.username ?? findUser.username;
  findUser.cellphone = data.cellphone ?? findUser.cellphone;
  findUser.birthday = data.birthday ?? findUser.birthday;

  if (data.address && findUser.address) {
    findUser.address.street = data.address.street ?? findUser.address.street;
    findUser.address.number = data.address.number ?? findUser.address.number;
    findUser.address.apt_unit =
      data.address.apt_unit ?? findUser.address.apt_unit;
    findUser.address.neighborhoods =
      data.address.neighborhoods ?? findUser.address.neighborhoods;
    findUser.address.city = data.address.city ?? findUser.address.city;
    findUser.address.state = data.address.state ?? findUser.address.state;
    findUser.address.zipcode = data.address.zipcode ?? findUser.address.zipcode;
  }

  await userRepository.save(findUser);

  if (data.email || data.password) {
    if (data.password !== undefined && data.password.trim() === "") {
      throw new AppError("Password cannot be empty", 400);
    }

    const updateToken = jwt.sign(
      { id: findUser.id },
      process.env.SECRET_KEY as string,
      { expiresIn: "15m" },
    );

    findUser.updateToken = updateToken;
    findUser.emailToUpdate = data.email ?? findUser.email;

    if (data.password) {
      findUser.passwordToUpdate = await hash(data.password, 10);
    }

    await userRepository.save(findUser);

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
      `,
    );

    return {
      message:
        "A confirmation email has been sent to your current email address.",
    };
  }

  const user = await userRepository.findOneBy({ id });
  return user!;
};
export default userUpdateService;
