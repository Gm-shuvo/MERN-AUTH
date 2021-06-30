const mongoose = require('mongoose');
const crypto = require('crypto');

//User Schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        lowercase: true,

    },
    username: {
        type: String,
        trim: true,
        require: true,
    },
    hashed_password: {
        type: String,
        require: true,
    },
    salt:String,
    role:{
        type: String,
        default:'Normal'
    },
    resetPassword:{
        data:String,
        default:''
    },
},

{timestamp:true} )

module.exports = mongoose.model('User',userSchema)