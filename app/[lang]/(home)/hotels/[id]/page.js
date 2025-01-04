import PropertyDetails from "@/components/hotel-details/PropertyDetails"
import ReviewSection from "@/components/hotel-details/ReviewSection"

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
