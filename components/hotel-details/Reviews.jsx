import { getRatingReviewsByHotelId } from "@/db/query";
import { getLoggedInUser } from "@/lib/auth/loggedin-user";
import ReviewCard from "./ReviewCard";

const Reviews = async ({ hotelId }) => {
  const user = await getLoggedInUser();
  let reviews = await getRatingReviewsByHotelId(hotelId);

  const myReview = reviews?.find(
    (review) => review?.userId?._id?.toString() === user?.id
  );

  if (!!myReview) {
    reviews = reviews.filter(
      (review) => review?._id?.toString() !== myReview?._id?.toString()
    );
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {!!myReview && (
        <ReviewCard
          key={myReview?._id}
          review={myReview}
          owner={myReview?.userId?._id?.toString() === user?.id}
        />
      )}

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
