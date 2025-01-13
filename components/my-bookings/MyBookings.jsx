import { fetchUserBookings } from "@/app/action/hotel-actions";
import BookingCard from "./BookingCard";

const MyBookings = async () => {
  const bookings = await fetchUserBookings();
  return (
    <>
      {bookings?.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      ) : (
        <div id="empty-state" className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Bookings Yet
          </h2>
          <p className="text-zinc-500 text-sm">
            You haven't made any bookings. Start exploring amazing stays!
          </p>
        </div>
      )}
    </>
  );
};

export default MyBookings;
