import express from "express";
import {
  deleteUser,
  login,
  logout,
  register,
} from "../controller/userController.js";
const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.delete("/:userId", deleteUser);

export default router;
