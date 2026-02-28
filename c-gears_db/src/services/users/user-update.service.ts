import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app-error";
import { IUserUpdate } from "../../interfaces";
import { Users } from "../../entities/user.entity";
import { compare, hash } from "bcrypt";
import emailService from "./email.service";
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

    if (data.email === findUser.email) {
      throw new AppError("You already use that email", 400);
    }

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
    if (data.password) {
      const isSamePassword = await compare(data.password, findUser.password);

      if (isSamePassword) {
        throw new AppError("You already use this password", 400);
      }
    }

    findUser.emailToUpdate = null;
    findUser.passwordToUpdate = null;
    findUser.updateCode = null;
    findUser.updateCodeExpires = null;
    findUser.updateAttempts = 0;

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedCode = await hash(code, 8);

    findUser.updateCode = hashedCode;
    findUser.updateCodeExpires = new Date(Date.now() + 10 * 60 * 1000);
    findUser.updateAttempts = 0;

    if (data.email) {
      findUser.emailToUpdate = data.email;
    }

    if (data.password) {
      findUser.passwordToUpdate = await hash(data.password, 10);
    }

    await userRepository.save(findUser);

    await emailService().sendEmail(
      findUser!.email,
      "Confirmation Code - GEARS CLUB",
      `Hello, ${findUser!.username}! 
      We received a request to change your email or password on GEARS CLUB. 
      Your confirmation code is: 
      
      ${code} 
      
      This code expires in 10 minutes.
      
      If you did not request this change, please ignore this email.`,

      `
      <div style="font-family: Arial, sans-serif; text-align: center;">

      <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>

      <h2>Hello, ${findUser!.username}!</h2>

      <p>
        We received a request to change your email or password
        on your <strong>GEARS CLUB</strong> account.
      </p>

      <p>Your confirmation code is:</p>

      <div 
        style="
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 8px;
        margin: 20px 0;
        color: #111;
      ">
        ${code}
      </div>

      <p>This code will expire in <strong>10 minutes</strong>.</p>

      <p style="font-size: 12px; color: #777;">
        If you did not request this change, please ignore this email.
      </p>

      </div>
      `,
    );

    return {
      message: "A confirmation code was sent to your email.",
    };
  }

  const user = await userRepository.findOneBy({ id });
  return user!;
};
export default userUpdateService;
