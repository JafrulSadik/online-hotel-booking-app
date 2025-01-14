import { FaBed, FaDoorOpen, FaPerson } from "react-icons/fa6";
import Amenities from "./Amenities";

const PropertyDescription = ({ hotel }) => {
  return (
    <div className="col-span-2">
      <div className="border-b pb-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          {hotel?.name} hosted by {hotel?.owner?.name}
        </h2>
        <div className="grid grid-cols-3 gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <FaPerson />
            <span>{hotel?.guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <FaDoorOpen />
            <span>{hotel?.bedrooms} bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBed />
            <span>{hotel?.beds} beds</span>
          </div>
        </div>
      </div>

      {hotel.about && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">About this place</h3>
          <p className="text-gray-700 leading-relaxed">{hotel.about}</p>
        </div>
      )}

      <Amenities hotel={hotel} />
    </div>
  );
};

export default PropertyDescription;
