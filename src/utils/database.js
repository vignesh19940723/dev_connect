const URI = `mongodb+srv://vignesh23selvaraj:VE2A1qhpBPGwCk5f@devconnect1.zb5dg.mongodb.net/devconnect`;
const mongoose = require('mongoose');

const connectDB = async () =>{
   await mongoose.connect(URI)
}


module.exports = connectDB

