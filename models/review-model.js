import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        requried : true
    },
    hotelId : {
        type : Schema.Types.ObjectId,
        ref : "Hotel",
        requried : true
    },
    rating : {
        type : Number,
        default : 0
    },
    review: {
        type : String
    }
}, {timestamps : true})

export const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema)