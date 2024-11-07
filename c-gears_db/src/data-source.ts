import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user.entity";
import { Address } from "./entities/userAddress.entity";
import { InitialMigration1730565224108 } from "./migrations/1730565224108-initialMigration";
import { CreateTables1730738540538 } from "./migrations/1730738540538-createTables";

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
        migrations: [InitialMigration1730565224108, CreateTables1730738540538],
      }
);

export default AppDataSource;
