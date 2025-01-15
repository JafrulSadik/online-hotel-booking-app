import PropertyDetails from "@/components/hotel-details/PropertyDetails"
import ReviewSection from "@/components/hotel-details/ReviewSection"
import { getHotelByHotelId } from "@/db/query"

export const generateMetadata = async ({params}) => {
  const {id} = params
  const hotel = await getHotelByHotelId(id)
  return {
    title: `${hotel?.name} - Hotel Booking`,
  }
}

const HotelDetailsPage = async ({params}) => {
  const {id} = params

  return (
    <div className="bg-gray-50">
      <PropertyDetails hotelId={id}/>
      <ReviewSection hotelId={id}/>
    </div>
  )
}

export default HotelDetailsPage
