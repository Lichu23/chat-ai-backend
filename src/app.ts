import express from "express";
import { config } from "dotenv";
import morgan from "morgan"
import appRouter from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";


//this help us for connecting with db
config()
const app = express();

//middlewares
app.use(cors({origin: process.env.URL_FRONTEND, credentials: true}))
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))

//removed it in production
app.use(morgan("dev"))

app.use("/api/v1", appRouter)

export default app