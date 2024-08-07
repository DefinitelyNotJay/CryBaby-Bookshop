import { Router } from "express";
import {
  createBook,
  editBook,
  getAllBooks,
  getEachBook,
  getCategories,
} from "../controller/book.js";
import customerBookRoute from "./customerBookRoute.js";
import multer from "multer";

import { verifyLogin } from "../controller/auth.js";

const router = Router();

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images}`);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/categories", getCategories);
router.post("/create", createBook);
router.post("/edit", editBook);
router.get("/all", getAllBooks);
router.get("/:id", getEachBook);
router.use("/customer", customerBookRoute);

export default router;
