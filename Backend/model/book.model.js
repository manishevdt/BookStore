import mongoose from "mongoose";

// crate schema for data
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

//create model for this data ab is schema ko model may convet kr rhe hai 
 const Book = mongoose.model("Book",bookSchema)

 export default Book;