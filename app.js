import express from "express";
import dotenv from "dotenv";
import cons from "cons";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter";
import applicationrouter from "./routes/applicationrouter";


const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cons({
    origin:[process.env.FRONTEN_URL],
    method: ['"GET","POST","DELETE", "PUT"'],
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"

}))

export default app;