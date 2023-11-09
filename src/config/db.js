const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose
        .connect(process.env.DATABASE_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("Connected to MongoDB");
        })
        .catch((error) => {
          console.error("Error connecting to MongoDB:", error);
        });
      
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;