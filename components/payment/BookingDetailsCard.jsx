import { bookingDetails } from "@/app/action/hotel-actions";
import { countDays } from "@/utils/countDaysDifference";
import { getDateFormatForPayment } from "@/utils/getDateFormat";
import Image from "next/image";

const BookingDetailsCard = async ({ bookingId }) => {
  const booking = await bookingDetails(bookingId);

  const totalStayNights = countDays(
    booking?.checkInDate,
    booking?.checkOutDate
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-start gap-6 mb-6 pb-6 border-b">
        <Image
          src={booking?.hotelId?.images[0]}
          alt="Property"
          height={200}
          width={200}
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {booking?.hotelId?.name}
          </h2>
          <div className="flex items-center mb-2">
            <i className="fas fa-star text-sm mr-1"></i>
            <span className="text-sm">4.6 (500+ reviews)</span>
          </div>

          <div className="max-w-96">
            <p className="text-zinc-600 truncate">
              {booking?.hotelId?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4">Reservation Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-600 text-sm">Check-in</span>
              <span className="text-zinc-500 text-sm">
                {getDateFormatForPayment(booking?.checkInDate)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600 text-sm">Check-out</span>
              <span className="text-zinc-500 text-sm">
                {getDateFormatForPayment(booking?.checkOutDate)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600 text-sm">Guests</span>
              <span className="text-zinc-500 text-sm">{booking?.guests}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-600">Total amount paid</span>
              <span className="font-semibold">
                ${+booking?.hotelId?.price * totalStayNights}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-600 text-sm">Booking ID</span>
              <span>{booking?._id.toString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
