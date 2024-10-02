import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import emailService from "./email.service";

const userActivateService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.isActive) {
    throw new AppError("User is already active", 401);
  }

  await userRepository.update({ id }, { isActive: true });

  await emailService().sendEmail(
    user.email,
    "Your account has been successfully reactivated!",
    `Hello, ${user.username}`,
    `
    <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
    <p>Hello, ${user.username}!</p>
    <p>We are pleased to inform you that your account has been successfully reactivated. You can now log in and access your account.</p>
    <p>We are available to help with any questions.</p>
    <p>Best regards,</p>
    <p><br>The Gears Club Team</p>
    `
  );
};

export default userActivateService;
