import { getDateFormatForDisplay } from "@/utils/getDateFormat";
import DownloadRecipt from "./DownloadRecipt";

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={booking?.hotelId?.images[0]}
          alt="Property Thumbnail"
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h2 className="text-lg text-zinc-800 font-semibold">
            {booking?.hotelId?.name}
          </h2>
          <p className="text-zinc-500 text-sm">
            Booking Date: {getDateFormatForDisplay(booking?.createdAt)}
          </p>
          <p className="text-zinc-500 text-sm">
            Booking Code: #{booking?._id.toString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-3 py-2 text-sm bg-primary text-white rounded-lg hover:brightness-90">
          View Trip Details
        </button>
        <DownloadRecipt bookingId={booking?._id.toString()} />
      </div>
    </div>
  );
};

export default BookingCard;
