import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "newpassword",
  database: "proyectom3",
  // database: "proyectoM3",
  // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User)