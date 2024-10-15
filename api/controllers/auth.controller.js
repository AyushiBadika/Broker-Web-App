import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new UserModel({ username, password: hashedPassword, email });
    await newUser.save();

    res.json({ message: "connected" });
  } catch (error) {
    res.json(error.message);
  }
};
