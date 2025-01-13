"use client";

import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaDownload } from "react-icons/fa6";

const DownloadRecipt = ({ bookingId }) => {
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/booking/${bookingId}/recipt`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch the PDF");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      window.open(blobUrl, "_blank");

      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch (error) {
      console.error("Error downloading file:", error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
    >
      {!loading ? (
        <FaDownload className="mr-2" />
      ) : (
        <CgSpinner className="mr-2 animate-spin" />
      )}

      {!loading ? "Download Recipt" : "Downloading..."}
    </button>
  );
};

export default DownloadRecipt;
