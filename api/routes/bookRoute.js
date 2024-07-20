import {Router} from "express"
import { createBook, getAllBooks, getEachBook } from "../controller/book.js"

const router = Router()


router.post("/create", createBook)
router.get("/all", getAllBooks)
router.get("/:id", getEachBook)

export default router;