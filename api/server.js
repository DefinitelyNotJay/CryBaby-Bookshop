import express from "express";
import mongoose, { Model } from "mongoose"
import book from "./models/book.js";


const app = express();

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/crybaby");
    console.log("server is running");
  } catch (err) {
    throw new Error(err);
  }
};

app.get("/", (req, res) => {
  res.json({
    header: "to you",
    message: "from me",
  });
  res.sendStatus(200);
});

app.listen("3000", () => {
  dbConnect();
});
