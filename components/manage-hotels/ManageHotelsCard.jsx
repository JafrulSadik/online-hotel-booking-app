import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Delete from "./Delete";

const ManageHotelsCard = ({ hotel }) => {
  return (
    <div className="overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src={hotel?.images[0]}
          alt="Hotel Property"
          className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
        />
        <div className="absolute flex items-center top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
          <FaStar className="text-yellow-500 mr-1" />
          4.8
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-zinc-800 mb-2">
          {hotel?.name}
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-zinc-600">{hotel?.rooms} Rooms Available</span>
          <span className="text-rose-600 font-semibold">
            ${hotel?.price}/night
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-zinc-500">Location: {hotel?.location}</span>
          <div className="flex space-x-2">
            <a
              href="./create.html"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaEdit className="size-4" />
            </a>
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHotelsCard;
