import { connect } from "http2";
import Author from "../models/Author.js";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBook(req, res, next) {
  const formData = req.body;
  formData.rating = 0;

  try {
    const authorDoc = await prisma.author.findFirst({
      where: {
        name: formData.author,
      },
    });
    const newBook = await prisma.book.create({
      data: {
        ...formData,
        author: {
          connect: {
            id: authorDoc.id,
          },
        },
      },
    });
  } catch (err) {
    next(createError("500", err));
  }
  res.status(200);
  // next({image: formData.image})
}

export async function getAllBooks(req, res, next) {
  const books = await prisma.book.findMany();

  if (!books) {
    next(createError("500", "No books!"));
  }
  res.status(200).json(books);
}

export const getEachBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookDoc = await prisma.book.findFirst({
      where: {
        id: id,
      },
      include: {
        author: true,
      },
    });
    const { author } = bookDoc;

    res.status(200).json({ ...bookDoc, author: author.name });
  } catch (err) {
    next(createError("500", err));
  }
};

export const editBook = async (req, res, next) => {
  const { id, ...updateData } = req.body;
  console.log(req.body);
  try {
    const author = await prisma.author.findFirst({
      where: { name: updateData.author },
    });
    const updatedBook = await prisma.book.update({
      where: { id: id },
      data: {
        ...updateData,
        author: {
          connect: {
            id: author.id,
          },
        },
      },
    });
    //
  } catch (err) {
    // console.log(err);
    next(createError("500", err));
  }
  res.status(200).json(updateData);
};
