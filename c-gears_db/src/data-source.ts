import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user.entity";
import { Address } from "./entities/user-address.entity";
import { InitialMigration1772468663777 } from "./migrations/1772468663777-initialMigration";
import { LinkedAccount } from "./entities/user-linked-account.entity";
import { CreateTables1772468764169 } from "./migrations/1772468764169-createTables";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [Users, Address, LinkedAccount],
        migrations: [InitialMigration1772468663777, CreateTables1772468764169],
      },
);

export default AppDataSource;
