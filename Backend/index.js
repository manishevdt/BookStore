import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import cors from "cors"


const app = express()
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 4000;

// CONNECT TO DB
const URI = process.env.MongoDBURI
try{
 mongoose.connect(URI,{
    useNewUrlParser:true, // hum db local use kr rhe hai islye yh do vala use krna padta hai cloud may nhi karte hai
    useUnifiedTopology:true
 });
 console.log("Connected Db")
}catch(error){
             console.log("error",error)
}

 //defiining routes
 app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})
