const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    role:{
     type: String,
     required: true
    },
    reporting: {
     type: String,
     required: true
    },
 },
 {timestamps: true}
 );

 const User = mongoose.model("User", userSchema);

 module.exports = User;