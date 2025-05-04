import Book from "../model/book.model.js";

export const getBook= async (req,res) => {
    try {
        const book= await Book.find() //hum apne model may data find kr rhe hai
        res.status(200).json(book) //200 success aur json may data
    } catch (error) {
        console.log("error",error)
        res.status(500).json(error) // internal server error
    }
}