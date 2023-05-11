import express from "express";
import { getUser, updateUser, getAllUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userId", getUser);
router.put("/", updateUser);
router.get("/:userId", getAllUsers);

export default router;
