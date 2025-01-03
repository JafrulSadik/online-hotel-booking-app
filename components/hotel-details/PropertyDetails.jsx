import { FaStar } from "react-icons/fa6";
import BookingCard from "./BookingCard";
import ImageGallery from "./ImageGallery";
import PropertyDescription from "./PropertyDescription";

const PropertyDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Maldives Paradise</h1>
        <div className="flex items-center text-gray-600">
          <FaStar className="text-yellow-500 mr-1" />
          <span>5 · </span>
          <span className="ml-2">2 reviews</span>
          <span className="mx-2">·</span>
          <span className="">Maldives, Tropical Paradise</span>
        </div>
      </div>

      <ImageGallery />

      <div className="grid grid-cols-3 gap-8">
        <PropertyDescription />
        <BookingCard />
      </div>
    </div>
  );
};

export default PropertyDetails;
