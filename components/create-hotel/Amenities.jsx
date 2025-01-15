"use client";
import {
  FaDumbbell,
  FaPersonSwimming,
  FaSink,
  FaSquareParking,
  FaUmbrellaBeach,
  FaWifi,
} from "react-icons/fa6";
import AmenityItem from "./AminityItem";

const amenitiesData = [
  { icon: FaUmbrellaBeach, label: "Beach access" },
  { icon: FaPersonSwimming, label: "Private pool" },
  { icon: FaWifi, label: "Free Wi-Fi" },
  { icon: FaSink, label: "Kitchen" },
  { icon: FaSquareParking, label: "Free Parking" },
  { icon: FaDumbbell, label: "Fitness Center" },
];

const Amenities = ({ amenities, onSetAmenities }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      <div className="grid grid-cols-2 gap-4" id="amenities">
        {amenitiesData.map((amenity, index) => (
          <AmenityItem
            key={index}
            icon={amenity.icon}
            label={amenity.label}
            amenities={amenities}
            onSetAmenities={onSetAmenities}
            checked={amenities.some((item) => item === amenity.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
