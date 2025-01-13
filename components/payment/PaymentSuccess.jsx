import { bookingDetails } from "@/app/action/hotel-actions";
import BookingDetailsCard from "./BookingDetailsCard";
import DownloadPdf from "./DownloadPdf";
import NeedHelpSection from "./NeedHelpSection";
import NextStepSection from "./NextStep";
import SuccessMessage from "./SuccessMessage";

const PaymentSuccess = async ({ bookingId }) => {
  const booking = await bookingDetails(bookingId);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <SuccessMessage />
      <BookingDetailsCard bookingId={bookingId} />
      <NextStepSection />
      <DownloadPdf bookingId={bookingId} />
      <NeedHelpSection />
    </div>
  );
};

export default PaymentSuccess;
