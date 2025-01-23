import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/app-error";
import { IUserResetPass } from "../../interfaces";
import emailService from "./email.service";
import jwt from "jsonwebtoken";

const userResetPasswordService = async (
  { password }: IUserResetPass,
  paramsId: string,
  paramsToken: string
): Promise<{ message: string }> => {
  const userRepository = AppDataSource.getRepository(Users);
  const findUser = await userRepository.findOneBy({ id: paramsId });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  try {
    const decodedToken = jwt.verify(
      paramsToken,
      process.env.SECRET_KEY as string
    ) as { id: string };

    if (decodedToken.id !== paramsId) {
      throw new AppError("Expired or invalid token", 401);
    }
  } catch (error) {
    throw new AppError("Expired or invalid token", 401);
  }

  const hashedPassword = await hash(password!, 10);

  await userRepository.update(paramsId, {
    password: hashedPassword ? hashedPassword : findUser.password,
  });

  await emailService().sendEmail(
    findUser!.email,
    "Your Password Has Been Successfully Updated",
    `Hello, ${
      findUser!.username
    }! We wanted to let you know that your password for your GEARS CLUB account has been successfully updated. If you made this change, no further action is required.`,
    `
    <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
    <p>Hello, ${findUser!.username}!</p>
    <p>We wanted to let you know that your password for your <strong>GEARS CLUB</strong> account has been successfully updated.</p>
    <p>If you made this change, no further action is required.</p>
    <p>If you did not request this change or believe your account may have been accessed without your permission, please <a href="mailto:support@gearsclub.online" style="color: #4CAF50;">contact our support team</a> immediately.</p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    <p><strong>For your security:</strong></p>
    <ul>
      <li> Always use a strong and unique password.</li>
      <li> Avoid sharing your password with anyone.</li>
    </ul>
    <p>If you have any questions or concerns, feel free to reach out to us at <a href="mailto:support@gearsclub.online" style="color: #4CAF50;">support@gearsclub.online</a>.</p>
    <p style="margin-top: 20px;">Best regards,<br><strong>The GEARS CLUB Team</strong></p>
    `
  );

  return { message: "Password updated successfully!" };
};
export default userResetPasswordService;
