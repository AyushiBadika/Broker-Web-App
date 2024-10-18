import { errorHandler } from "../utils/error.js";
import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const getUser = async (req, res) => {
  res.json({
    message: "Hello",
  });
};

export const updateUser = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    return res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
