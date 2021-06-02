const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        reqquired:true
    },
    email:{
        type:String,
        reqquired:true
    },
    phone:{
        type:Number,
        reqquired:true
    },
    cnic:{
        type:Number,
        reqquired:true
    },
    password:{
        type:String,
        reqquired:true
    },
    cpassword:{
        type:String,
        reqquired:true
    },
})

const User= mongoose.model('USER',userSchema);
module.exports = User;