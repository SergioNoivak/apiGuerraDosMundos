import mongoose from "mongoose";

const ShipSchema = new mongoose.Schema({
    id: {
        type: String
    },
    ship_nm: {
        type: String,
        required: true
    },
    ship_sg: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('ships', ShipSchema);