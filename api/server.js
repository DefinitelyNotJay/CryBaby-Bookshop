import express from "express";
import mongoose, { Model } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import bookRoute from "./routes/bookRoute.js"
import Book from "./models/Book.js";
import multer from "multer";
const app = express();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crybaby");
    console.log("server is running");
  } catch (err) {
    throw new Error(err);
  }
};




app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/book", bookRoute)

app.listen("3000", async () => {
  dbConnect();
  Book.createCollection()
});
