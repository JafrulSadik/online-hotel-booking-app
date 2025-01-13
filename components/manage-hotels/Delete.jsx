"use client";
import { deleteHotelByHotelId } from "@/app/action/hotel-actions";
import {
  showConfirmationModalWithBtnName,
  showErrorModal,
} from "@/utils/modals";
import { successToast } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

const Delete = ({ hotelId, hotelName }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = await showConfirmationModalWithBtnName(
      `Are you sure you want to delete the hotel '${hotelName}'?`,
      "Delete"
    );

    if (confirmDelete.isConfirmed) {
      try {
        await deleteHotelByHotelId(hotelId);
        successToast("Hotel deleted successfully.");
        router.refresh();
      } catch (error) {
        showErrorModal("Something went wrong while deleting the hotel.");
      }
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-600">
      <FaTrash className="size-4" />
    </button>
  );
};

export default Delete;
