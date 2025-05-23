import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const appDataSource = new DataSource({
    type: "postgres",
    url: `postgresql://${process.env.PG_DB_USERNAME}:${process.env.PG_DB_PASSWORD}@${process.env.PG_DB_HOST}:${process.env.PG_DB_PORT}/${process.env.PG_DB_NAMEDB}`,
    entities: [__dirname + '/../entities/*.{js,ts}'],
    //synchronize: true,
})

export async function connectDB() {
    try {
        await appDataSource.initialize()
    } catch (error) {
        console.log(error)
    }
}
