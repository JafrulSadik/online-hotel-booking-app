
import MainSection from "@/components/booking/MainSection";
import { getHotelByHotelId } from "@/db/query";
import { auth } from "@/lib/auth/auth";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";


export const metadata = {
  title: "Hotel Booking - Payment",
};

const PaymentPage = async ({params : {id}}) => {
    const session = await auth()
    if (!session?.user) {
      redirect("/login")
    }
   const hotel = await getHotelByHotelId(id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <Link href={`/hotels/${id}`} className="flex items-center text-zinc-800 hover:underline">
          <FaChevronLeft className="mr-2" />
          Request to book
        </Link>
      </div>
      <MainSection hotelId={id} price={hotel.price} name={hotel.name} guests={hotel.guests} thumbnail={hotel.images[0]}/>
    </div>
  )
}

export default PaymentPage
