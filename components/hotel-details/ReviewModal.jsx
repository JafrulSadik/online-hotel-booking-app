"use client";

import { addReviewOrRating } from "@/app/action/review-action";
import { successToast } from "@/utils/notify";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import StarButton from "./StarButton";

const ReviewModal = ({ onShowModal, hotelId }) => {
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [mouseOverStar, setMouseOverStar] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const submitReview = async () => {
    if (!star) {
      setError("Rating is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await addReviewOrRating({
        hotelId,
        review,
        rating: star,
        lang: params.lang,
      });

      if (response) {
        successToast("Review added successfully!");
        onShowModal(false);
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleReview = (review) => {
    setError("");
    setReview(review);
  };

  const handleRating = (star) => {
    setError("");
    setStar(star);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      id="reviewModal"
    >
      <div className="bg-white rounded-2xl w-full max-w-xl mx-4 overflow-hidden">
        <div className="border-b p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Write a review</h3>
            <button
              onClick={() => onShowModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Overall Rating
              </label>
              <div className="flex gap-2">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <StarButton
                      key={index}
                      index={index}
                      star={star}
                      mouseOverStar={mouseOverStar}
                      setStar={handleRating}
                      setMouseOverStar={setMouseOverStar}
                    />
                  ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Review
              </label>
              <textarea
                rows="4"
                value={review}
                onChange={(e) => handleReview(e.target.value)}
                placeholder="Share your experience with other travelers..."
                className="w-full px-4 py-3 rounded-lg border focus:border-gray-500 focus:ring-0 resize-none"
              ></textarea>
            </div>
          </form>
          {error && <p className="text-red-400 text-sm text-left">{error}</p>}
        </div>

        <div className="border-t p-4 bg-gray-50">
          <div className="flex justify-end gap-4">
            <button
              onClick={() => onShowModal(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={submitReview}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90"
            >
              {loading && <CgSpinner className="animate-spin" />}
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
