import { getBookingByHotelIdAndUserId } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";

export const fetchBookingStatus = async (hotelId) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        return false
    }

    try {
        const bookingStatus = await getBookingByHotelIdAndUserId(loggedInUser.id, hotelId);
        return bookingStatus
    } catch (error) {
        throw new Error(error.message)
    }
}