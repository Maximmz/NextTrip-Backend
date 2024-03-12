import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  checkAdmin,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Token verification
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyToken, verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyToken, verifyAdmin, checkAdmin);

// Update
router.put("/:id", verifyToken, verifyUser, updateUser);
// Delete
router.delete("/:id", verifyToken, verifyUser, deleteUser);
// Get
router.get("/:id", verifyToken, verifyUser, getUser);
// Get all
router.get("/", verifyToken, verifyAdmin, getUsers);

export default router;
