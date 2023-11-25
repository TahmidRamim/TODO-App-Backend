import User from "../../models/user.js";
import { CustomError } from "../../utils/CustomError.js";
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      next(new CustomError("User not found", 404));
    }
    return res.status(200).send(user);
  } catch (err) {
    next(new CustomError("User not found", 404));
  }
};
