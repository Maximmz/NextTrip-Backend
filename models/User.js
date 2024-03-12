import mongoose from 'mongoose';
import Hotel from "../models/Hotel.js";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        default: null
    }
},
    {timestamps: true}
    
);

export default mongoose.model("User", UserSchema)