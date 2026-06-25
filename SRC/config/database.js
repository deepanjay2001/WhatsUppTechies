const dns = require('dns'); // or require('dns/promises')
dns.setServers(['1.1.1.1', '8.8.8.8']);
const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://deepanjay2001_db_user:5846635@deepanjaymongo.ue5ttrl.mongodb.net/devTinder");
}

module.exports=connectDB;
