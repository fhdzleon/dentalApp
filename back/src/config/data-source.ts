import { DataSource } from "typeorm";
import { Appoiment } from "../entities/Appoiment";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "proyecto3",
  //dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [Appoiment, Credential, User],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppoimentModel = AppDataSource.getRepository(Appoiment);
