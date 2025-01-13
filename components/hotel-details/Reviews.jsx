import { getRatingReviewsByHotelId } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import ReviewCard from "./ReviewCard";

const Reviews = async ({ hotelId }) => {
  const user = await getLoggedInUser();
  const reviews = await getRatingReviewsByHotelId(hotelId);

  return (
    <div className="grid grid-cols-2 gap-8">
      {reviews?.map((review) => (
        <ReviewCard
          key={review?._id}
          review={review}
          owner={review?.userId?._id?.toString() === user?.id}
        />
      ))}
    </div>
  );
};

export default Reviews;
