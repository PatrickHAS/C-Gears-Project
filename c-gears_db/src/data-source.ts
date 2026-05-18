import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user.entity";
import { Address } from "./entities/user-address.entity";
import { LinkedAccount } from "./entities/user-linked-account.entity";
import { Payment } from "./entities/user-payment";
import { InitialMigration1776795539725 } from "./migrations/1776795539725-initialMigration";
import { CreateTables1776795569133 } from "./migrations/1776795569133-createTables";

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
        entities: [Users, Address, LinkedAccount, Payment],
        migrations: [InitialMigration1776795539725, CreateTables1776795569133],
      },
);

export default AppDataSource;
