import express from "express";
import {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking
} from "../controllers/booking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create a new booking
router.post("/", verifyAdmin, createBooking);

// Get all bookings
router.get("/", verifyAdmin, getBookings);

// Get a specific booking
router.get("/:id", verifyAdmin, getBooking);

// Update a booking
router.put("/:id", verifyAdmin, updateBooking);

// Delete a booking
router.delete("/:id", verifyAdmin, deleteBooking);

export default router;
