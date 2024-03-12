import mongoose from 'mongoose';
import User from "../models/User.js";


const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    
      },
    area: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: [Number],
        min: 0,
        max:5
    },
   
    rooms: {
        type: [String],
        
    },
    cheapestPrice: {
        type: Number,
        required: true
    }, 
})


export default mongoose.model("Hotel", HotelSchema)