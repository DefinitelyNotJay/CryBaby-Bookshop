import express from "express";
import { hit, home } from "../controller/customerBook.js";

const router = express.Router();

router.get("/home", home);
router.get("/hit", hit);

export default router;
