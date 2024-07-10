import express from "express";
import mongoose, { Model } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
const app = express();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crybaby");
    console.log("server is running");
  } catch (err) {
    throw new Error(err);
  }
};

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);

app.listen("3000", async () => {
  dbConnect();
});
