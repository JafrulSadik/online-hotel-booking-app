"use server"
import { createHotelReviewRating, deleteReviewById, getHotelByHotelId, getReivewById, getUserRatingAndReviewStatus } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import { revalidatePath } from "next/cache";

export const addReviewOrRating = async ({hotelId, review, rating, lang}) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){    
        throw new Error("You are not authorized.")
    }    

    try {
        const hotel = await getHotelByHotelId(hotelId);

        if(!hotel){
            throw new Error("Hotel not found.")
        }

        if(hotel.owner._id.toString() === loggedInUser.id){
            throw new Error("You cannot review your own hotel.")
        }

        const  newReview = await createHotelReviewRating({rating, review, hotelId, userId : loggedInUser.id})

        revalidatePath(`/${lang}/hotels/${hotelId}`)
        
        return {
            reviewId : newReview?._id.toString(),
            review : newReview?.review,
            rating : newReview?.rating
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

export const fetchReviewStatus = async (hotelId) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){    
        return false
    }
    
    try {
        const reviewStatus = await getUserRatingAndReviewStatus(hotelId, loggedInUser.id);
        
        return reviewStatus
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteReview = async (reviewId) => {
    const loggedInUser = await getLoggedInUser();

    if(!loggedInUser){
        throw new Error("You are not authorized.")
    }

    try {
        const review = await getReivewById(reviewId);

        if(!review){
            throw new Error("Review not found.")
        }

        if(review.userId.toString() !== loggedInUser.id){
            throw new Error("You are not authorized to delete this review.")
        }


        await deleteReviewById(reviewId);

        revalidatePath(`/hotels/${review.hotelId}`)
        return true
    } catch (error) {
        throw new Error(error.message)
    }
}