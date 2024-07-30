import User from "../models/User.js";
import * as jose from "jose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import { PrismaClient } from "@prisma/client";

const secretKey = ";lasdcv;cioxvjladnglaewhfiad;vml;adcnvnaklfds";

const prisma = new PrismaClient();

export const register = async (req, res, next) => {
  const registerData = req.body;
  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(registerData.password, salt);
  try {
    await prisma.user.create({
      data: {
        ...registerData,
        password: hashedPassword,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
  res.status(200).json("complete");
};

export const login = async (req, res, next) => {
  const data = req.body;

  const user = await prisma.user.findFirst({
    where: { username: data.username },
  });

  if (!user) {
    res.json("User not found!").status(500);
  }

  const isPasswordCorrect = bcryptjs.compare(data.password, user.password);

  if (!isPasswordCorrect) {
    res.json("Wrong username or password!").status(500);
  }

  const { email, role } = user;

  const token = jwt.sign({ email, role }, secretKey);
  res
    .cookie("token", token, { httpOnly: true })
    .status(200)
    .json({ email, role });
};

export const logout = async (req, res, next) => {
  if (!req.cookies) {
    next(createError("500", "You are not login yet."));
  }
  res.cookie("token", {}, { maxAge: -999 }).status(200).send("yes");
};

export const verifyLogin = async (req, res, next) => {

  if(!req.cookies.token){
    return res.status(200).redirect("http://localhost:5173/login")
  }
  next();
};
