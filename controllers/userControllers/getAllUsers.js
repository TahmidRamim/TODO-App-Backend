import User from "../../models/user.js";
import { CustomError } from "../../utils/CustomError.js";
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(new CustomError());
  }
};
