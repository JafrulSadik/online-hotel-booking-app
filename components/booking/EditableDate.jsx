"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const EditableDate = ({ checkIn, checkOut, onCheckIn, onCheckOut }) => {
  return (
    <div className="grid grid-cols-2 space-x-2">
      <div className="flex flex-col overflow-hidden p-2 ml-3 border rounded-md justify-center">
        <span className="text-gray-600">Check In</span>
        <div className="flex text-gray-800 items-center gap-1">
          <FaCalendarAlt className="size-4" />
          <DatePicker
            selected={checkIn}
            maxDate={checkOut}
            minDate={Date.now()}
            placeholderText="Check In"
            onChange={(date) => onCheckIn(date)}
            className="text-sm outline-none rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col overflow-hidden p-3 ml-3 border rounded-md justify-center">
        <span className="text-gray-600">Check Out</span>
        <div className="flex text-gray-800 items-center gap-1">
          <FaCalendarAlt className="size-4" />
          <DatePicker
            className="text-sm outline-none rounded-md"
            selected={checkOut}
            minDate={checkIn || Date.now()}
            placeholderText="Check Out"
            onChange={(date) => onCheckOut(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditableDate;
