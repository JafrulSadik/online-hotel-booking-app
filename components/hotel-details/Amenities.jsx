import {
  FaDumbbell,
  FaPersonSwimming,
  FaSink,
  FaSquareParking,
  FaUmbrellaBeach,
  FaWifi,
} from "react-icons/fa6";

const amenitiesData = [
  { icon: FaUmbrellaBeach, label: "Beach access" },
  { icon: FaPersonSwimming, label: "Private pool" },
  { icon: FaWifi, label: "Free Wi-Fi" },
  { icon: FaSink, label: "Kitchen" },
  { icon: FaSquareParking, label: "Free Parking" },
  { icon: FaDumbbell, label: "Fitness Center" },
];

const Amenities = ({ hotel }) => {
  const amenities =
    amenitiesData?.filter((amenity) =>
      hotel?.amenities?.includes(amenity.label)
    ) || [];

  return (
    <div>
      {amenities?.length > 0 && (
        <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      )}
      <div className="grid grid-cols-2 gap-4">
        {amenities?.map((amenity, index) => (
          <div key={index} className="flex items-center gap-2">
            <amenity.icon />
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
