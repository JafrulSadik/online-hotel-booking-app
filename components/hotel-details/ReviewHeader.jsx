import { FaStar } from "react-icons/fa6";
import WriteReview from "./WriteReview";

const ReviewHeader = ({
  rating,
  count,
  hotelId,
  hasBookedRoom,
  hasReviewed,
  isHotelCreator,
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <div className="flex items-center">
          <FaStar
            className={`size-5 mr-2 ${
              rating > 0 ? "text-yellow-500" : "text-gray-300"
            }`}
          />
          <span className="text-xl font-semibold">{rating}</span>
          <span className="mx-2">·</span>
          <span className="text-gray-600">
            {count > 0 ? `${count} reviews` : "No reviews"}
          </span>
        </div>
      </div>

      <WriteReview
        hotelId={hotelId}
        hasBookedRoom={hasBookedRoom}
        hasReviewed={hasReviewed}
        isHotelCreator={isHotelCreator}
      />
    </div>
  );
};

export default ReviewHeader;
