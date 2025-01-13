import { getHotelByHotelId, getHotelRating } from "@/db/query";
import BookingCard from "./BookingCard";
import ImageGallery from "./ImageGallery";
import PropertyDescription from "./PropertyDescription";
import PropertyHeader from "./PropertyHeader";

const PropertyDetails = async ({ hotelId }) => {
  const hotel = await getHotelByHotelId(hotelId);
  const hotelRating = await getHotelRating(hotelId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <PropertyHeader
        name={hotel?.name}
        location={hotel?.location}
        rating={hotelRating}
      />

      <ImageGallery images={hotel?.images} />

      <div className="grid grid-cols-3 gap-8">
        <PropertyDescription hotel={hotel} />
        <BookingCard
          hotelId={hotel?._id.toString()}
          guests={hotel?.guests}
          price={hotel.price}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
