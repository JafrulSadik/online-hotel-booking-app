import { FaStar } from "react-icons/fa6";
import Reviews from "./Reviews";

const ReviewSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border-t">
      {/* <!-- Reviews Header with Average Rating --> */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 size-5 mr-2" />
            <span className="text-xl font-semibold">4.9</span>
            <span className="mx-2">·</span>
            <span className="text-gray-600">2 reviews</span>
          </div>
        </div>

        <a
          href="./ReviewModal.html"
          className="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
        >
          Write a Review
        </a>
      </div>

      <Reviews />
    </div>
  );
};

export default ReviewSection;
