// a authenticator middleware that by cookie
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user.js";
export const isAuth = async (req, res, next) => {
  try {
    if (!req.cookies.user_id) {
      return res.status(401).send("Login first");
    }
    const { id } = jwt.verify(req.cookies.user_id, process.env.JWT_SECRET);
    console.log(jwt.verify(req.cookies.user_id, process.env.JWT_SECRET));

    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      res.clearCookie("user_id");
      return res.send("User  isn't valid");
    }

    const user = await User.findById(id);

    if (!user) {
      res.clearCookie("user_id");
      return next(new Error("Invalid user", 404));
    }
    req.user = id;

    next();
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "Internal Server error ",
    });
  }
};
