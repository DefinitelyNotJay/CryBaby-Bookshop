import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";

const authorSchema = new Schema({
    name:{
        type: String,
        unique: true,
        require: true
    },
    image: String,
    description: String,
    books: [
        {
            type: ObjectId
        }
    ]
})

export default model("Author", authorSchema)