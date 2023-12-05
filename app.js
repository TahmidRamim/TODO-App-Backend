import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { ErrorHandler } from "./middlewares/ErrorHandler.js";
import { taskRouter } from "./routers/task.js";
import { router } from "./routers/user.js";
export const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/api/v1/user/", router);
app.use("/api/v1/task/", taskRouter);
app.use(ErrorHandler);
