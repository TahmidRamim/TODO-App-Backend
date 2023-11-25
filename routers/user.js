import { Router } from "express";
import { createUser } from "../controllers/userControllers/createUser.js";
import { getAllUsers } from "../controllers/userControllers/getAllUsers.js";
import { getUserById } from "../controllers/userControllers/getUserById.js";
import { login } from "../controllers/userControllers/login.js";
import { Logout } from "../controllers/userControllers/logout.js";
export const router = Router();

router.post("/create", createUser);

router.get("/getAll", getAllUsers);
router.post("/login", login);
router.get("/logout", Logout);
router.get("/:id", getUserById);
