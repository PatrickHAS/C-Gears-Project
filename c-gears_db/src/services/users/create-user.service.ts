import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app-error";
import { hash } from "bcrypt";
import { IUserCreate } from "../../interfaces/index";
import { Users } from "../../entities/user.entity";
import { Address } from "../../entities/user-address.entity";
import emailService from "./email.service";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const userCreateService = async ({
  name,
  surname,
  username,
  email,
  cellphone,
  birthday,
  password,
  isAdm,
  address: { street, number, apt_unit, neighborhoods, state, city, zipcode },
}: IUserCreate): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);
  const addressRepository = AppDataSource.getRepository(Address);
  const users = await userRepository.find();

  const cellphoneAlreadyExists = users.find(
    (user) => user.cellphone === cellphone
  );
  const usernameAlreadyExists = users.find(
    (user) => user.username === username
  );
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (cellphoneAlreadyExists) {
    throw new AppError("cellphone already registered", 409);
  }

  if (usernameAlreadyExists) {
    throw new AppError("username already registered", 409);
  }

  if (emailAlreadyExists) {
    throw new AppError("email already registered", 409);
  }

  const formattedCellphoneInput = cellphone.startsWith("+")
    ? cellphone
    : `+${cellphone}`;

  const phoneNumber = parsePhoneNumberFromString(formattedCellphoneInput);
  const formattedCellphone = phoneNumber
    ? phoneNumber.formatInternational()
    : cellphone;

  const createdAddress = addressRepository.create({
    street,
    number,
    apt_unit,
    neighborhoods,
    state,
    city,
    zipcode,
  });
  await addressRepository.save(createdAddress);

  const hashedPassword = await hash(password, 10);

  const createdUser = userRepository.create({
    name,
    surname,
    username,
    email,
    cellphone: formattedCellphone,
    birthday,
    password: hashedPassword,
    isAdm,
    address: { ...createdAddress },
  });

  await userRepository.save(createdUser);

  await emailService().sendEmail(
    createdUser.email,
    "Welcome to Gears Club!",
    `Hello, ${createdUser.username}! Welcome to Gears Club. We're excited to have you join our community.`,
    `
    <p><img src="cid:gearsclublogo" alt="Gears Club Logo" style="width: 80px;"/></p>
    <p>Hello, ${createdUser.username}!</p>
    <p>Welcome to <strong>Gears Club</strong>! We’re thrilled to have you as part of our community.</p>
    <p>With Gears Club, you’ll be able to connect with other players, participate in exciting tournaments, and enjoy all the features we have to offer.</p>
    <p>If you have any questions or need assistance, feel free to reach out to our support team at any time.</p>
    <p>Enjoy, and welcome aboard!</p>
    <p>Best regards,<br>The Gears Club Team</p>
  `
  );

  return createdUser;
};
export default userCreateService;
