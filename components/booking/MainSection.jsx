"use client";

import { getFormatCheckInOut } from "@/utils/getFormatCheckinOut";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EditableDate from "./EditableDate";
import EditableGuest from "./EditableGuest";
import PaymentForm from "./PaymentForm";
import PaymentOverview from "./PaymentOverview";

const MainSection = ({ hotelId, price, name, guests, thumbnail }) => {
  const searchParams = useSearchParams();
  const [guestsNum, setGuestsNum] = useState(searchParams.get("guests"));
  const [checkin, setCheckin] = useState(new Date(searchParams.get("checkin")));
  const [checkout, setCheckout] = useState(
    new Date(searchParams.get("checkout"))
  );
  const [edit, setEdit] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your trip</h2>
          <div className="flex justify-between items-center mb-4">
            {edit === "date" ? (
              <EditableDate
                checkIn={checkin}
                checkOut={checkout}
                onCheckIn={setCheckin}
                onCheckOut={setCheckout}
              />
            ) : (
              <div>
                <h3 className="font-medium">Dates</h3>
                <p className="text-zinc-600 text-sm">
                  {getFormatCheckInOut(checkin, checkout)}
                </p>
              </div>
            )}

            <button
              className="text-zinc-800 underline text-sm"
              onClick={() => setEdit((prev) => (prev ? "" : "date"))}
            >
              {edit === "date" ? "save" : "edit"}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Guests</h3>
              {edit === "guests" ? (
                <EditableGuest guestsNum={guestsNum} onGuest={setGuestsNum} />
              ) : (
                <p className="text-zinc-600 text-sm">{guestsNum} guest</p>
              )}
            </div>

            <button
              className="text-zinc-800 underline text-sm"
              onClick={() => setEdit((prev) => (prev ? "" : "guests"))}
            >
              {edit === "guests" ? "save" : "edit"}
            </button>
          </div>
        </section>

        <PaymentForm
          checkin={checkin}
          checkout={checkout}
          guestsNum={guestsNum}
          allowedGuests={guests}
          hotelId={hotelId}
        />
      </div>

      <PaymentOverview
        thumbnail={thumbnail}
        name={name}
        price={price}
        checkin={checkin}
        checkout={checkout}
      />
    </div>
  );
};

export default MainSection;
