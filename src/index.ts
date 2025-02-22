import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import userRouter from "./routes/user.route"

dotenv.config();

const portEnv = process.env.PORT;
if (!portEnv) {
    console.error("Error: PORT is not defined in .env file");
    process.exit(1);
}


const PORT: number = parseInt(portEnv, 10);
if (isNaN(PORT)) {
    console.error("Error: PORT is not a number in .env file");
    process.exit(1);
}

const app = express();

const corsOptions = {
    origin: "*",
    credentials: true,
    allowedHeaders: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
}

app.use(cors(corsOptions));

app.use(express.json());


AppDataSource.initialize().then(async () => {

    console.log("Database is connected");    

}).catch(error => console.log(error))


app.use("/api/user", userRouter);


app.listen(PORT, ()=> {
    console.log(`Server is running on Port ${PORT}`)
});




export default app;