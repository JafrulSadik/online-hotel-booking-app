import mongoose, { Schema } from "mongoose"


const hotelSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    images : {
        type : Array,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    rooms : {
        type : Number,
        required : true,
    },
    bedrooms : {
        type : Number,
        required : true,
    },
    beds : {
        type : Number,
        required : true,
    },
    guests : {
        type : Number,
        required : true,
    },
    description : {
        type : String
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    avgRating : {
        type : Number,
        default : 0 
    },
    totalReviews : {
        type : Number,
        default : 0
    },
    amenities : {
        type : [String]
    }
}, {timestamps : true})

export const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema)