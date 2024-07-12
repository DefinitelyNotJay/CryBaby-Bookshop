import User from "../models/User.js";
import * as jose from "jose";
import bcryptjs from "bcryptjs";
import { now } from "mongoose";

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
    res.status(500).json(err);
  }
  res.status(200).json("complete");
};

async function encrypt(payload, key) {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 hour from now on")
    .sign(key);
}

async function decrypt(input, key) {
  const { payload } = jose.jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export const login = async (req, res, next) => {
  const data = req.body;
  const user = await User.findOne({ username: data.username });
  if (!user) {
    res.json("User not found!").status(500);
  }

  const isPasswordCorrect = bcryptjs.compare(data.password, user.password);

  if (!isPasswordCorrect) {
    res.json("Wrong username or password!").status(500);
  }

  const expired = new Date(Date.now() + 10 * 60000);
  const session = await encrypt({ user, expired }, key);

  res.cookie("session", session, { httpOnly: true }).status(200);
};
