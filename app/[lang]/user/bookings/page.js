import MyBookings from "@/components/my-bookings/MyBookings";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";



export const metadata = {
  title: "Hotel Booking - My Bookings",
};


const BookingsPage = async () => {
  const session = await auth()
  if (!session?.user) {
    redirect("/login")
  }
    return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      <MyBookings/>
    </div>
    )
  }
  
  export default BookingsPage
  