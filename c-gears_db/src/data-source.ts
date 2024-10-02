import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user.entity";
import { Address } from "./entities/userAddress.entity";
import { InitialMigration1725643685537 } from "./migrations/1725643685537-initialMigration";
import { CreateTables1725643746517 } from "./migrations/1725643746517-createTables";

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
        entities: [Users, Address],
        migrations: [InitialMigration1725643685537, CreateTables1725643746517],
      }
);

export default AppDataSource;
