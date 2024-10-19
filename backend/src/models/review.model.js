import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";

const reviewSchema = new Schema({
  comment: String,
  stars: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
});

const Review = mongoose.model("reviewSchema", Review);
export default Review;
