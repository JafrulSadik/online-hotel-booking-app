"use client";
import { deleteReview } from "@/app/action/review-action";
import {
  showConfirmationModalWithBtnName,
  showErrorModal,
} from "@/utils/modals";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Options = ({ reviewId, hotelId }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await showConfirmationModalWithBtnName(
        "Are you sure you want to delete this review?",
        "Delete"
      );

      if (response.isConfirmed) {
        await deleteReview(reviewId, hotelId);
      }
    } catch (error) {
      showErrorModal(error.message);
    }
    setLoading(false);
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  return (
    <div className="absolute flex items-center -top-3 right-0 gap-2">
      <button>
        <FaEdit className="text-primary/60 hover:text-primary text-xl" />
      </button>
      <button onClick={handleDelete} disabled={loading}>
        <MdDelete className="text-red-500/60 hover:text-red-500 text-xl" />
      </button>
    </div>
  );
};

export default Options;
