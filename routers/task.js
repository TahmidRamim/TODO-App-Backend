import { Router } from "express";
import { createTask } from "../controllers/taskControllers/createTask.js";
import { deleteTask } from "../controllers/taskControllers/deleteTask.js";
import { getAllTask } from "../controllers/taskControllers/getAllTask.js";
import { updateTask } from "../controllers/taskControllers/updatetask.js";
import { isAuth } from "../middlewares/isAuth.js";
export const taskRouter = Router();

taskRouter.post("/newTask", isAuth, createTask);
taskRouter.get("/getAll", isAuth, getAllTask);
taskRouter.put("/update/:id", isAuth, updateTask);
taskRouter.delete("/delete/:id", isAuth, deleteTask);
