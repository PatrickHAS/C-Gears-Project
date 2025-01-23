import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/app-error";
import emailService from "./email.service";

const userDisableService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!user.isActive) {
    throw new AppError("User inactive", 401);
  }

  await userRepository.update({ id }, { isActive: false });

  await emailService().sendEmail(
    user.email,
    "Your account has been successfully deactivated!",
    `Hello, ${user.username}`,
    `
    <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
    <p>Hello, ${user.username}!</p>
    <p>We would like to inform you that your account has been successfully deactivated. To reactivate it, please contact Gears Club support.</p>
    <p>We are available to help with any questions.</p>
    <p>Best regards,</p>
    <p><br>The Gears Club Team</p>
  `
  );
};
export default userDisableService;
