import {Router} from "express"
import { createBook, getAllBooks } from "../controller/book.js"
import multer from "multer"

const router = Router()
const upload = multer({dest: "public/books/"})


router.post("/create", createBook)
router.get("/all", getAllBooks)

export default router;