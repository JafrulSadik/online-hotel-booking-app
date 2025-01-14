"use server"
import { createBooking, getBookingByHotelIdAndUserId, getHotelByHotelId, updateHotel } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import { sendEmails } from "@/utils/email";

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


export const hotelBooking = async ({ paymentDetails, bookingDetails, hotelId }) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("You are not authorized.")
    }

    try {
      const hotel = await getHotelByHotelId(hotelId);
      
      if(!hotel){
        throw new Error("Hotel not found.")
      } 

      if(hotel.rooms < 1){
        throw new Error("No rooms available.")
      }

      const newBooking = {
        hotelId : hotelId,
        userId : loggedInUser.id,
        ...bookingDetails,
        ...paymentDetails
      }

      const bookingResponse = await createBooking({bookingInfo : newBooking})

      await updateHotel(hotelId, {rooms : hotel.rooms - 1})

      const emailsToSend = [
        {
          to: loggedInUser.email,
          subject: `Booking Confirmation in ${hotel.name}`,
        }
      ];

      const emailSentResponse = await sendEmails(emailsToSend, bookingResponse, loggedInUser );

      console.log(emailSentResponse)

      return {
        bookingId : bookingResponse._id.toString()
      }
    } catch (error) {
        throw new Error(error.message);
    }
}
