import {
  FaBed,
  FaDoorOpen,
  FaPerson,
  FaPersonSwimming,
  FaSink,
  FaUmbrellaBeach,
  FaWifi,
} from "react-icons/fa6";

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

      {/* <!-- Description --> */}
      {hotel.about && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">About this place</h3>
          <p className="text-gray-700 leading-relaxed">{hotel.about}</p>
        </div>
      )}

      {/* <!-- Amenities --> */}
      <div>
        <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FaUmbrellaBeach />
            <span>Beach access</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPersonSwimming />
            <span>Private pool</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWifi />
            <span>Free Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSink />
            <span>Kitchen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
