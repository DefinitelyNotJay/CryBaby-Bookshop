import { Router } from "express";
import {
  createBook,
  editBook,
  getAllBooks,
  getEachBook,
  getCategories,
} from "../controller/book.js";

const router = Router();

router.get("/categories", getCategories);
router.post("/create", createBook);
router.post("/edit", editBook);
router.get("/all", getAllBooks);
router.get("/:id", getEachBook);

export default router;
