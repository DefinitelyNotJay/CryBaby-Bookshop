import express from "express";
import mongoose, { Model } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import bookRoute from "./routes/bookRoute.js"
import Book from "./models/Book.js";
import multer from "multer";
const app = express();



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
});
