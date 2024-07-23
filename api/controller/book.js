import { connect } from "http2";
import Author from "../models/Author.js";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBook(req, res, next) {
  const formData = req.body;
  formData.rating = 0;
  console.log(formData)
  try {
    const authorDoc = await prisma.author.findFirst({
      where: {
        name: formData.author,
      },
    });
    const newBook = await prisma.book.create({ data: { ...formData, author:{
      connect: {
        id: authorDoc.id
      }
    } } });
  } catch (err) {
    console.log(err)
    next(createError("500", err));
  }
  res.status(200);
  // next({image: formData.image})
}

export async function getAllBooks(req, res, next) {
  const books = await prisma.book.findMany();
  console.log(books);
  if (!books) {
    next(createError("500", "No books!"));
  }
  res.status(200).json(books);
}

export const getEachBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookDoc = await Book.findById(id);
    // console.log(bookDoc);
    res.status(200).json(bookDoc);
  } catch (err) {
    next(createError("500", err));
  }
};

export const editBook = async (req, res, next) => {
  const { id, image, ...updateData } = req.body;
  updateData.image = "";
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: updateData.name,
          cost: updateData.cost,
          author: updateData.author,
          description: updateData.description,
          image: updateData.image,
          edition: updateData.edition,
        },
      }
    );
    // console.log(updatedBook)
  } catch (err) {
    console.log(err);
    next(createError("500", err));
  }
  res.status(200).json(updateData);
};
