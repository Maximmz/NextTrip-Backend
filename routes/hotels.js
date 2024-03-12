import express from "express";
import {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
    getAreaHotels,
    countByArea
    
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//Get area based hotels
router.get("/finda/:area",getAreaHotels);
//Get
router.get("/find/:id", getHotel);
//Get all
router.get("/", getHotels);

router.get("/countByArea", countByArea)


export default router;