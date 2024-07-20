import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import Book from "./Book.js";

const authorSchema = new Schema({
    name:{
        type: String,
        unique: true,
        require: true
    },
    image: String,
    description: String,
    books: [typeof Book]
})

export default model("Author", authorSchema)