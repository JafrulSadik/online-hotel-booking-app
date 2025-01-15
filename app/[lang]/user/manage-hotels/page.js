import ManageHotelList from "@/components/manage-hotels/ManageHotelList";
import ManageHotelSekeletonList from "@/components/skeleton/ManageHotelSkeletonList";
import Link from "next/link";
import { Suspense } from "react";


export const metadata = {
  title: "Hotel Booking - Manage Booking",
}; 

const ManageHotelPage = async ({params}) => {
  const {lang} = params;
    const session = await auth()
    if (!session?.user) {
      redirect("/login")
    }

  return (
    <div className="bg-gray-50 font-sans min-h-[calc(100vh-200px)]">
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-800">Manage Hotels</h1>
        <Link href={`/${lang}/user/manage-hotels/create`}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors"
        >
          + Create Hotel
        </Link>
      </div>

      <Suspense fallback={<ManageHotelSekeletonList/>}>
        <ManageHotelList lang={lang}/>
      </Suspense>
    </div>
  </div>
  )
}

export default ManageHotelPage
