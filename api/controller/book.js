import { connect } from "http2";
import Author from "../models/Author.js";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBook(req, res, next) {
  const formData = req.body;
  // console.log(formData.category)
  formData.rating = 0;

  try {
    // find authorId
    const authorDoc = await prisma.author.findFirst({
      where: {
        name: formData.author,
      },
    });
    // get all categories id
    const categories = await prisma.category.findMany({
      where: {
        value: { in: formData.category },
      },
    });
    // create category connect object
    const categoriesOnBooks = categories.map((category) => ({
      category: {
        connect: {
          id: category.id,
        },
      },
    }));

    console.log(categoriesOnBooks);

    // create book
    const {author, category, ...createBookData} = formData;
    const newBook = await prisma.book.create({
      data: {
        ...createBookData,
        author: {
          connect: {
            id: authorDoc.id,
          },
        },
        categories: {
          create: categoriesOnBooks,
        },
      },
    });
  } catch (err) {
    console.log(err);
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

export const getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    next(createError(404, "Category is empty!"));
  }
};
