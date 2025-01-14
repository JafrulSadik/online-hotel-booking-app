"use server"

import { getBookingById, getBookingsByUserId, getHotelByHotelId } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import { Hotel } from "@/models/hotel-model";

export const deleteHotelByHotelId = async (hotelId) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("User not found.")
    }

    try {
        const hotel = await getHotelByHotelId(hotelId);

        if(!hotel){
            throw new Error("Hotel not found.")
        }

        if(hotel.owner._id.toString() !== loggedInUser.id){
            throw new Error("You are not authorized to delete this hotel.")
        }

        await Hotel.findByIdAndDelete(hotelId)

    } catch (error) {
        throw new Error(error.message);
    }
}


export const reviewAndRating = async (hotelId, review, rating) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("You are not authorized.")
    }

    try {
        
    } catch (error) {
        
    }
}



export const bookingDetails = async (bookingId) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("You are not authorized.")
    }

    try {
        const bookingInfo = getBookingById(bookingId);
        return bookingInfo
    } catch (error) {
        throw new Error(error.message)
    }
} 

export const fetchUserBookings = async () => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("You are not authorized.")
    }    

    try {
        const bookings = await getBookingsByUserId(loggedInUser.id);
        return bookings
    } catch (error) {
        throw new Error(error.message)    
    }    
}




