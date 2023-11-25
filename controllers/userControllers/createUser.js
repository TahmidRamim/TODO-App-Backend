import User from "../../models/user.js";
import { CustomError } from "../../utils/CustomError.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already exists");
    }
    await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "Created User successfully",
    });
  } catch (error) {
    next(new CustomError());
  }
};
