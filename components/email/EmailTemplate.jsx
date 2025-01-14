import { getDateFormatForPayment } from "@/utils/getDateFormat";

const EmailTemplate = ({ booking, user }) => {
  return (
    <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-blue-600 text-white text-center py-6">
        <h1 class="text-2xl font-bold">Booking Confirmation</h1>
        <p class="text-sm">
          Your stay at{" "}
          <span class="font-semibold">{booking?.hotelId?.name}</span> is
          confirmed!
        </p>
      </div>

      <div class="p-6">
        <p class="text-gray-700 text-base mb-4">
          Dear <span class="font-semibold">{user?.name}</span>,
        </p>
        <p class="text-gray-700 text-base mb-4">
          Thank you for booking with us! Below are the details of your
          reservation:
        </p>
        <table class="w-full text-left text-gray-600 mb-6">
          <tbody>
            <tr>
              <td class="font-semibold py-2">Guest Name:</td>
              <td>{user?.name}</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="font-semibold py-2">Booking Number:</td>
              <td>{booking?._id}</td>
            </tr>
            <tr>
              <td class="font-semibold py-2">Check-in Date:</td>
              <td>{getDateFormatForPayment(booking?.checkIn)}</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="font-semibold py-2">Check-out Date:</td>
              <td>{getDateFormatForPayment(booking?.checkOut)}</td>
            </tr>
            <tr>
              <td class="font-semibold py-2">Room Type:</td>
              <td>[Room Type]</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="font-semibold py-2">Guests:</td>
              <td>{booking?.guests}</td>
            </tr>
            <tr>
              <td class="font-semibold py-2">Total Amount Paid:</td>
              <td>{booking?.totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-gray-700 text-base mb-4">
          **Hotel Address:** <br />
          {booking?.hotelId?.location}, [City, State, Zip Code]
        </p>
        <p class="text-gray-700 text-base mb-6">
          If you have any questions or special requests, feel free to contact us
          at
          <a href="mailto:[Support Email]" class="text-blue-500 underline">
            [Support Email]
          </a>{" "}
          or call us at
          <a href="tel:[Support Number]" class="text-blue-500 underline">
            [Support Number]
          </a>
          .
        </p>
        =
        <div class="text-center">
          <a
            href="[Manage Booking Link]"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-blue-700 transition"
          >
            Manage Booking
          </a>
        </div>
      </div>

      <div class="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        <p>&copy; 2025 [booking?.hotelId?.name]. All rights reserved.</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
