export const Logout = async (req, res, next) => {
  try {
    res.clearCookie("user_id");
    res.status(200).send("Logged out successfully");
  } catch (error) {
    next(new CustomError("Something went wrong", 400));
  }
};
