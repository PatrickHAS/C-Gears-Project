import { Command } from "commander";
import { IUserCreate } from "../interfaces/index";
import AppDataSource from "../data-source";
import userCreateService from "../services/users/createUser.service";

const program = new Command();

program
  .command("create-admin")
  .description("Create an admin user")
  .option("--name <name>", "Name of the admin user", "Admin")
  .option("--surname <surname>", "Surname of the admin user", "User")
  .option("--username <username>", "Username for the admin user", "GCadmin")
  .option("--email <email>", "Email for the admin user", "admin@gearsclub.com")
  .option(
    "--cellphone <cellphone>",
    "Cellphone of the admin user",
    "1234567890"
  )
  .option("--ssn <ssn>", "SSN of the admin user", "123-45-6789")
  .option("--birthday <birthday>", "Birthday of the admin user", "2000-01-01")
  .option("--password <password>", "Password for the admin user", "admin1234")
  .option("--street <street>", "Street for the admin user", "123 Admin St")
  .option("--number <number>", "House number for the admin user", "100")
  .option("--apt_unit <apt_unit>", "Apartment unit for the admin user", "")
  .option(
    "--neighborhoods <neighborhoods>",
    "Neighborhoods for the admin user",
    "AdminVille"
  )
  .option("--state <state>", "State for the admin user", "RS")
  .option("--city <city>", "City for the admin user", "AdminCity")
  .option("--zipcode <zipcode>", "Zipcode for the admin user", "12345-678")
  .action(async (options) => {
    await AppDataSource.initialize();

    const userData: IUserCreate = {
      name: options.name,
      surname: options.surname,
      username: options.username,
      email: options.email,
      cellphone: options.cellphone,
      ssn: options.ssn,
      birthday: options.birthday,
      password: options.password,
      address: {
        street: options.street,
        number: options.number,
        apt_unit: options.apt_unit,
        neighborhoods: options.neighborhoods,
        state: options.state,
        city: options.city,
        zipcode: options.zipcode,
      },
      isAdm: options.boolean,
    };

    try {
      const adminUser = await userCreateService({ ...userData, isAdm: true });
      console.log("Admin user successfully created:", adminUser);
      process.exit(0);
    } catch (error) {
      console.error("Error creating admin user:", (error as Error).message);
      process.exit(1);
    }
  });

program.parse(process.argv);
