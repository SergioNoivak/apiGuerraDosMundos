import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema({
    id: {
        type: String
    },
    equipment:{
        type:String,
        required:true
    },
    ship_id:{
        type:mongoose.Types.ObjectId,
        ref:'ships',
        required:true
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

export default mongoose.model('equipments', EquipmentSchema)