import Task from "../../models/task.js";
import { CustomError } from "../../utils/CustomError.js";

export const createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,

      owner: req.user,
    });

    res.send({ success: true, message: "Task created successfully" });
  } catch (err) {
    next(new CustomError("Something went wrong", 400));
  }
};
