"use server"

import { Booking } from "@/models/booking-model"
import { Hotel } from "@/models/hotel-model"
import { Review } from "@/models/review-model"
import { User } from "@/models/user-model"
import { dbConnect } from "@/services/dbConnection"

export const getHotelsByUserInfo = async (userInfo) => {
        await dbConnect()
    try {
        const user = await User.findOne({email : userInfo.email})
        const hotels = await Hotel.find({owner : user._id})
        return hotels
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}

export const getHotelByHotelId = async (id) => {
        await dbConnect()
    try {
        const hotel = await Hotel.findOne({_id : id}).populate('owner', {name : 1, _id : 1})
        return hotel
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}


export const getUserByEmail= async (email) => {
        await dbConnect()
    try {
        const user = await User.findOne({email}).lean();

        if(!user) {
            return null
        }
        
        return {
            id : user?._id.toString(),
            name : user?.name,
            email : user?.email
        }
    } catch (error) {
        throw new Error("Something went wrong while fetching user data;")
    }
}

export const createBooking = async ({bookingInfo}) => {
        await dbConnect()
    try {
        const newBooking = await Booking.create(bookingInfo)
        return newBooking
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}

export const getBookingById = async (bookingId) => {
        await dbConnect()
    try {
        const bookingDetails = await Booking.findById(bookingId).populate("userId", ["name", "email"]).populate("hotelId")
        return bookingDetails
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}

export const getBookingByHotelIdAndUserId = async (userId, hotelId) => {
        await dbConnect()
    try {
        const bookingDetails = await Booking.findOne({userId, hotelId})
        return !!bookingDetails
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}

export const updateHotel = async (hotelId, updateData) => {
        await dbConnect()
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            hotelId,
            { $set: updateData },
            { new: true, runValidators: true }
          ).lean()
        return updatedHotel
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}

export const getBookingsByUserId = async (userId) => {
        await dbConnect()
    try {
        const bookings = await Booking.find({userId : userId}).populate("hotelId")
        return bookings
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}


export const createHotelReviewRating = async ({review, rating, hotelId, userId}) => {
    try {
        const newReview = new Review({
            userId,
            hotelId
        });

        if(review) {
            newReview.review = review
        }
        if(rating){
            newReview.rating = rating
        }

        await newReview.save()
        return newReview
    } catch (error) {
        throw new Error("Something went wrong while creating user review;");
    }
}


export const getRatingReviewsByHotelId = async (hotelId) => {
    try {
        const reviews = await Review.find({hotelId}).populate("userId", ["name", "email"]).lean()
        return reviews
    } catch (error) {
        throw new Error("Something went wrong while fetching user review;");
    }
}

export const getUserRatingAndReviewStatus = async (hotelId,userId) => {
    try {
        const review = await Review.findOne({userId, hotelId})
        return !!review
    } catch (error) {
        throw new Error("Something went wrong while fetching user review;");
    }
}

export const getReivewById = async ( reviewId ) => {
    try {
        const review = await Review.findById(reviewId)
        return review
    } catch (error) {
        throw new Error("Something went wrong while fetching user review;");
    }
}

export const deleteReviewById = async (reviewId) => {
    try {
        const review = await Review.findByIdAndDelete(reviewId)
        return review
    } catch (error) {
        throw new Error("Something went wrong while deleting user review;");
    }
}

export const getHotelRating = async (hotelId) => {
    try {
        const reviews = await Review.find({hotelId}).lean()

        const rating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
        return {
            rating : rating > 0 ? rating.toFixed(1) : 0,
            count : reviews.length || 0
        }
    } catch (error) {
        throw new Error("Something went wrong while fetching user review;");
    }
}
