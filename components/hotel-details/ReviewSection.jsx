import { fetchBookingStatus } from "@/app/action/booking-actions";
import { fetchReviewStatus } from "@/app/action/review-action";
import { getHotelByHotelId, getHotelRating } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import ReviewHeader from "./ReviewHeader";
import Reviews from "./Reviews";

const ReviewSection = async ({ hotelId }) => {
  const [user, hotel, hasReviewed, hasBookedRoom, hotelRating] =
    await Promise.all([
      getLoggedInUser(),
      getHotelByHotelId(hotelId),
      fetchReviewStatus(hotelId),
      fetchBookingStatus(hotelId),
      getHotelRating(hotelId),
    ]);

  const isHotelCreator = hotel.owner._id.toString() === user?.id;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border-t">
      <ReviewHeader
        rating={hotelRating.rating}
        count={hotelRating.count}
        hotelId={hotelId}
        hasBookedRoom={hasBookedRoom}
        hasReviewed={hasReviewed}
        isHotelCreator={isHotelCreator}
      />

      <Reviews hotelId={hotelId} />
    </div>
  );
};

export default ReviewSection;
