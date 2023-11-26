import User from "../../models/user.js";

import jwt from "jsonwebtoken";
import { CustomError } from "../../utils/CustomError.js";

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User doesn't exists",
      });
    } else if (user.password !== req.body.password) {
      return res.status(400).send({
        success: false,
        message: "Password doesn't match",
      });
    } else {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET
      );
      console.log(process.env.NODE_ENV);
      res.cookie("user_id", token, {
        expires: new Date(Date.now() + 60 * 60 * 1000),
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
      });
      res.send({
        success: true,
        message: "Logged in successfully",
      });
    }
  } catch (error) {
    next(new CustomError("Something went wrong", 400));
  }
};
