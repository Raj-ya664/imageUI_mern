const mongoose = require('mongoose');


async function connectDB(){
   await mongoose.connect("mongodb://localhost:27017/auth");

   console.log("database is connected")

}

module.exports = connectDB;