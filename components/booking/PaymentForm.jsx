"use client";

import { hotelBooking } from "@/app/action/booking-actions";
import { successToast } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import BillingAddress from "./BillingAddress";
import Payment from "./Payment";

const PaymentForm = ({
  checkin,
  checkout,
  guestsNum,
  allowedGuests,
  hotelId,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (formData) => {
    setLoading(true);
    const paymentDeatils = {
      cardNumber: formData.cardNumber,
      totalAmount: formData.totalAmount,
      cleaningFee: formData.cleaningFee,
      serviceFee: formData.serviceFee,
      perNightFee: formData.perNightFee,
    };

    console.log(formData);

    const bookingDetails = {
      hotlId: hotelId,
      checkInDate: checkin,
      checkOutDate: checkout,
      guests: guestsNum,
      streetAddress: formData.streetAddress,
      aptOrSuite: formData.aptOrSuite,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };

    try {
      const response = await hotelBooking({
        paymentDetails: paymentDeatils,
        bookingDetails: bookingDetails,
        hotelId: hotelId,
      });

      successToast("Booking requested successfully!");

      router.push(`/en/user/bookings/${response.bookingId}/payment/success`);
    } catch (error) {
      setError("root.random", { message: error.message });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Payment errors={errors} register={register} />
      <BillingAddress errors={errors} register={register} />

      <div role="alert" className="text-red-400 text-left">
        {errors?.root?.random?.message}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center gap-2 text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90"
      >
        {loading && <CgSpinner className="size-5 animate-spin" />}
        Request to book
      </button>
    </form>
  );
};

export default PaymentForm;
