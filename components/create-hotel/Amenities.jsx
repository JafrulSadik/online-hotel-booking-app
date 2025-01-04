import {
  FaDumbbell,
  FaPersonSwimming,
  FaSink,
  FaSquareParking,
  FaUmbrellaBeach,
  FaWifi,
} from "react-icons/fa6";

const Amenities = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
      <div className="grid grid-cols-2 gap-4" id="amenities">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUmbrellaBeach />
          <span>Beach access</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaPersonSwimming />
          <span>Private pool</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaWifi />
          <span>Free Wi-Fi</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaSink />
          <span>Kitchen</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaSquareParking />
          <span>Free Parking</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaDumbbell />
          <span>Fitness Center</span>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
