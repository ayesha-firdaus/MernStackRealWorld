const mongoose=require("mongoose");
const cabinSchema=new mongoose.Schema({
    created_at:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
        required:true,
    },
    maxCapacity:{
        type:Number,
        required:true,
    },
    regularPrice:{
        required:true,
        type:Number
    },
    discount:{
        required:true,
        type:Number,
    },
    description:{
        required:true,
        type:String,

    },
    image:{
        required:true,
        type:String
    }
})
const Cabins=mongoose.model('Cabins',cabinSchema);
module.exports=Cabins;