import {Router} from "express"
import { register } from "../controller/auth.js";
import { login, logout } from "../controller/auth.js";

const router = Router()


router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)



export default router;

