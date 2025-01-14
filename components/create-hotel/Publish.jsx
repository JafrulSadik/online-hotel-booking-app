"use client";

import { getMissingInfo } from "@/utils/getMissingInfo";
import {
  showConfirmationModalWithBtnName,
  showErrorModal,
  showWarningModal,
} from "@/utils/modals";
import { successToast } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";

const Publish = ({ images, hotelInfo, amenities, session, lang }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onPublish = async () => {
    const missingInfo = getMissingInfo(hotelInfo);

    if (missingInfo) {
      showWarningModal(
        `You are missing the following information: ${missingInfo}`
      );
      return;
    }

    if (images.includes("")) {
      showWarningModal("Please upload all the images before publishing.");
      return;
    }

    const confirmationResponse = await showConfirmationModalWithBtnName(
      "Are you sure you want to publish this hotel?",
      "Publish"
    );

    if (!confirmationResponse.isConfirmed) return;

    setLoading(true);

    try {
      const response = await fetch("/api/hotels", {
        method: "POST",
        body: JSON.stringify({
          ...hotelInfo,
          images: [...images],
          amenities: [...amenities],
          email: session.user.email,
          path: `/${lang}/user/manage-hotels`,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      const data = await response.json();
      successToast(data.message);
      router.push(`/${lang}/user/manage-hotels`);
    } catch (error) {
      showErrorModal(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onPublish}
      disabled={loading}
      className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4"
    >
      {loading ? (
        <ImSpinner6 className="animate-spin" />
      ) : (
        <FaSave className="mr-2" />
      )}
      Publish
    </button>
  );
};

export default Publish;
