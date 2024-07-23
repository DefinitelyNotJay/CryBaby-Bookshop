import { ObjectId } from "mongodb";
import mongoose, { now } from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    authorId: {
      type: ObjectId,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
