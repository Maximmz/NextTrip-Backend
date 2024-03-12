import express from "express";
import {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getRooms,
    getRoomsByHotel
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//Create
router.post("/:hotelid",verifyAdmin, createRoom);
//Update
router.put("/:id",verifyAdmin, updateRoom);
//Delete
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);
//Get
router.get("/:id", getRoom);
//Get all
router.get("/", getRooms);

router.get("/hotel/:hotelId", getRoomsByHotel);

export default router;