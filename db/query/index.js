"use server"

import { Hotel } from "@/models/hotel-model"
import { User } from "@/models/user-model"

export const getHotelsByUserInfo = async (userInfo) => {
    try {
        const user = await User.findOne({email : userInfo.email})
        const hotels = await Hotel.find({owner : user._id})
        return hotels
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}

export const getHotels = async () => {
    try {
        const hotels = await Hotel.find()
        return hotels
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}

export const getHotelByHotelId = async (id) => {
    try {
        const hotel = await Hotel.findOne({_id : id}).populate('owner', {name : 1, _id : 0})
        return hotel
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}