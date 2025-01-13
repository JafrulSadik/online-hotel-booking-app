"use client";

import { showErrorModal } from "@/utils/modals";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaDownload } from "react-icons/fa6";

const DownloadPdf = ({ bookingId }) => {
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/booking/${bookingId}/recipt`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download certificate");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `receipt_${bookingId}.pdf`; // File name for download
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      showErrorModal(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={handleDownload}
        className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:brightness-90"
      >
        {!loading ? (
          <FaDownload className="mr-2" />
        ) : (
          <CgSpinner className="mr-2 animate-spin" />
        )}

        {!loading ? "Download Recipt" : "Downloading..."}
      </button>
    </div>
  );
};

export default DownloadPdf;
