const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        date_registered: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        phone_number:{
            type: Number,
        },
        password:{
            type: String,
            required:true,
        } 
    }
);


const Users = mongoose.model('user', UserSchema);

module.exports = {
    Users
}