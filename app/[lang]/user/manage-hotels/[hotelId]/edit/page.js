import UpdateHotel from "@/components/update-hotel/UpdateHotel";
import { getHotelByHotelId } from "@/db/query";
import { auth } from "@/lib/auth/auth";

const EditHotelPage = async ({params}) => {
  const session = await auth();
    if (!session?.user) {
      redirect("/login")
    }
  const {lang, hotelId} = params
  const hotel = await getHotelByHotelId(hotelId)

  const parsedData = JSON.stringify(hotel)
  
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
          <UpdateHotel session={session} lang={lang} hotel={parsedData} hotelId={hotelId}/>
      </div>
    </div>
  )
}

export default EditHotelPage