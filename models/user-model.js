import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    fname : {
        type : String,
    },
    lname : {
        type : String,
    },
    name : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true})

export const User = mongoose.models.User || mongoose.model("User", userSchema)