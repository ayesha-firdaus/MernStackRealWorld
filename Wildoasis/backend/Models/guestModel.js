const mongoose = require("mongoose");

const guestSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true

    },
    nationality:{
        type:String,
        required:true,
    },
    countryFlag:{
        
    }
})