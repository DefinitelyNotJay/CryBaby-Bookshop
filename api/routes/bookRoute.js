import {Router} from "express"
import { createBook } from "../controller/book.js"

const router = Router()

router.post("/create", createBook)

export default router;