import Task from "../../models/task.js";
import { CustomError } from "../../utils/CustomError.js";

export const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({ owner: req.user });
    res.send({
      tasks,
    });
  } catch (err) {
    next(new CustomError());
  }
};
