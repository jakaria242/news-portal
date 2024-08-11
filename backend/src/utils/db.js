const mongoose = require('mongoose')

const dbConnection = async ()=>{
     try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB Connected !! DB Host ${connectDB.connection.host}`);
        
     } catch (error) {
        console.log("Mongodb connection Faild", error);
     }
}

module.exports = dbConnection