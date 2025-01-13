import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        requried : true
    },
    hotelId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hotel",
        requried : true
    },
    checkInDate : {
        type : Date,
        requried: true,
    },
    checkOutDate : {    
        type : Date,    
        requried: true,
    },
    guests : {
        type: Number,
        requried : true
    },
    perNightFee : {
        type : Number,
        requried: true,
    },
    cleaningFee : {
        type : Number,
        requried: true,
    },  
    serviceFee : {
        type : Number,
        requried: true,
    },
    streetAddress : {
        type : String,
        requried : true
    },
    aptOrSuite : {
        type : String, 
        requried : true
    },
    city : {
        type : String,
        requried : true
    },
    state : {
        type : String,
        requried : true
    },
    zipCode : {
        type : String,
        requried : true
    }
}, {timestamps : true})

export const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)