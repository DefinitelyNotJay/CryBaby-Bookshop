import User from "../models/User.js";
import * as jose from "jose";
import bcryptjs from "bcryptjs";

export const register = async (req, res, next) => {
  const registerData = req.body;
  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(registerData.password, salt);
  try {
    await User.collection.insertOne({
      ...registerData,
      password: hashedPassword,
    });
  } catch (err) {
    res.status(500).json(err)
  }
  res.status(200).json("complete")
};
