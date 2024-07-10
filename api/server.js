import express from "express";
import mongoose, { Model } from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crybaby");
    console.log("server is running");
  } catch (err) {
    throw new Error(err);
  }
};

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json({
    header: "to you",
    message: "from me",
  });
  res.sendStatus(200);
});

app.listen("3000", async () => {
  dbConnect();
});
