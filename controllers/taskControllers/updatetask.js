import Task from "../../models/task.js";

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    let completed = task.completed;
    const updatedTask = await Task.updateOne(
      { _id: id },
      {
        $set: {
          completed: !completed,
        },
      }
    );
    return res.send({
      updatedTask,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Internal server error",
    });
    console.log(error);
  }
};
