import { getHotelByHotelId } from "@/db/query";
import BookingCard from "./BookingCard";
import ImageGallery from "./ImageGallery";
import PropertyDescription from "./PropertyDescription";
import PropertyHeader from "./PropertyHeader";

const PropertyDetails = async ({ hotelId }) => {
  const hotel = await getHotelByHotelId(hotelId);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <PropertyHeader
        name={hotel?.name}
        location={hotel?.location}
        rating={hotel?.avgRating}
        totalReviews={hotel?.totalReviews}
      />

      <ImageGallery images={hotel?.images} />

      <div className="grid grid-cols-3 gap-8">
        <PropertyDescription hotel={hotel} />
        <BookingCard
          hotelId={hotel?._id.toString()}
          guests={hotel?.guests}
          price={hotel?.price}
          rating={hotel?.avgRating}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
