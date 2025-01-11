import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import emailService from "./email.service";

const userEmailDataService = async (
  userEmail: string
): Promise<Array<string>> => {
  const userRepository = AppDataSource.getRepository(Users);
  const emailUser = await userRepository.findOneBy({ email: userEmail });

  if (emailUser) {
    await emailService().sendEmail(
      emailUser.email,
      "Confirmation of data change",
      `Hello, ${
        emailUser!.username
      }! We have received a request to reset the password for the GEARS CLUB account associated with this email address. Please click the link below to go to the password reset page: ${
        process.env.DB_HOST
      }:3000/users/pass-reset/${emailUser.id}`,
      `
      <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
      <p>Hello, ${emailUser!.username}!</p>
      <p>We have received a request to reset the password for the GEARS CLUB account associated with this email address.</p>
      <p>Please click the link below to go to the password reset page:</p>
      <a href="${process.env.DB_HOST}:3000/users/pass-reset/${
        emailUser.id
      }">Click here to reset your password</a>
      <p>If the above link does not work, copy and paste the following URL into your browser:</p>
      <p>${process.env.DB_HOST}:3000/users/pass-reset/${emailUser.id}</p>`
    );

    return [
      "An email with a reset link has been sent to your current email address.",
    ];
  } else {
    throw new AppError("Email not found", 404);
  }
};
export default userEmailDataService;
