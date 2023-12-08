
import express from "express";
import { publicRouter } from "./src/route/public-api.js";
import { errorMiddleware } from "./src/middleware/error-middleware.js";
import dotenv from "dotenv/config";
import { userRouter } from "./src/route/api.js";
import cors from "cors"

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const corsOption = {
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204,
}
app.use(cors(corsOption))
app.use(publicRouter);
app.use(userRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`port berjalan di http://localhost:${process.env.PORT}`);
});


