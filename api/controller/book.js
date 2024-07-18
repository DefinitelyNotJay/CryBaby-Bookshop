import Author from "../models/Author.js";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { ObjectId } from "mongodb";

export async function createBook(req, res, next) {
  const formData = req.body;
  console.log(req.body);
  try {
    const authorDoc = await Author.collection.findOneAndUpdate({ name: formData.author }, {$push: {books: formData}});
    console.log(authorDoc)
    await Book.collection.insertOne({ ...formData, authorId: authorDoc._id });
  } catch (err) {
    next(createError("500", err));
  }
}
