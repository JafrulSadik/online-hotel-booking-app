import { FaStar } from "react-icons/fa6";

const Rating = ({ rating, totalReviews }) => {
  return (
    <div className="flex items-center text-gray-600">
      <FaStar
        className={rating > 0 ? "text-yellow-500 mr-1" : "text-gray-300 mr-1"}
      />
      <span>{rating} · </span>
      <span className="ml-2">
        {totalReviews > 0 ? `${totalReviews} reviews` : "No reviews"}
      </span>
    </div>
  );
};

export default Rating;
