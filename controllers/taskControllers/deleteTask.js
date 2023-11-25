import Task from "../../models/task.js";
import { CustomError } from "../../utils/CustomError.js";

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.send({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(new CustomError("Something went wrong", 400));
  }
};
