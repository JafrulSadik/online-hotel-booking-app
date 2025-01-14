"use client";

import { getDateFormat } from "@/utils/getDateFormat";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaStar } from "react-icons/fa6";

const BookingCard = ({ hotelId, price, guests, rating }) => {
  const pathname = usePathname();
  const [error, setError] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("");
  const router = useRouter();

  const handleReserve = ({ rating }) => {
    if (!checkIn) {
      setError("Check in date is required.");
      return;
    }

    if (!checkOut) {
      setError("Check in date is required.");
      return;
    }

    const checkOutDate = getDateFormat(checkOut);
    const checkInDate = getDateFormat(checkIn);

    if (guests !== "" && selectedGuest > guests) {
      setError(`Maximum ${guests} guests allowed.`);
      return;
    }

    const params = new URLSearchParams();

    params.set("checkin", checkInDate);
    params.set("checkout", checkOutDate);
    params.set("guests", selectedGuest);

    router.push(`${pathname}/booking?${params.toString()}`);
  };

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl font-bold">${price}</span>
            <span className="text-gray-600 ml-1">per night</span>
          </div>
          <div className="flex items-center">
            <FaStar
              className={`${
                rating > 0 ? "text-yellow-500" : "text-gray-300"
              } mr-1`}
            />
            <span>{rating || "0.0"}</span>
          </div>
        </div>

        <div className="border rounded-lg mb-4">
          <div className="grid grid-cols-2 border-b">
            {/* <input
              type="text"
              placeholder="Check in"
              className="p-3 border-r"
            /> */}
            <div className="overflow-hidden ml-3">
              <DatePicker
                selected={checkIn}
                maxDate={checkOut}
                minDate={Date.now()}
                placeholderText="Check In"
                onChange={(date) => setCheckIn(date)}
                className="my-3 border-r outline-none"
              />
            </div>

            <div className="overflow-hidden pr-3 border-l pl-3">
              <DatePicker
                selected={checkOut}
                minDate={checkIn || Date.now()}
                placeholderText="Check Out"
                onChange={(date) => setCheckOut(date)}
                className="py-3 border-r outline-none"
              />
            </div>
            {/* <input type="text" placeholder="Check out" className="p-3" /> */}
          </div>
          <input
            min={0}
            max={guests}
            value={selectedGuest}
            type="number"
            placeholder="Guests"
            className="w-full p-3 outline-none"
            onChange={(e) => setSelectedGuest(e.target.value)}
          />
        </div>

        <p className="text-red-400 my-3 text-left">{!!error && error}</p>

        <button
          onClick={handleReserve}
          className="w-full block text-center bg-primary text-white py-3 rounded-lg transition-all hover:brightness-90"
        >
          Reserve
        </button>

        <div className="text-center mt-4 text-gray-600">
          <p>You won't be charged yet</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
