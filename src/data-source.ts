import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.DATABASE_URL)
export const AppDataSource = new DataSource({
    type: "mongodb",
    // database: "typeORM",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
