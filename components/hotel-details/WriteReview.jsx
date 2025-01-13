"use client";

import { useState } from "react";
import ReviewModal from "./ReviewModal";

const WriteReview = ({
  hotelId,
  hasReviewed,
  isHotelCreator,
  hasBookedRoom,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const canWriteReview = !hasReviewed && !isHotelCreator && hasBookedRoom;

  if (!canWriteReview) return null;

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
      >
        Write a Review
      </button>

      {showModal && (
        <ReviewModal onShowModal={handleCloseModal} hotelId={hotelId} />
      )}
    </>
  );
};

export default WriteReview;
