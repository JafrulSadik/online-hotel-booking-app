import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const HomeHotelCard = ({ lang, hotel }) => {
  return (
    <Link href={`/${lang}/hotels/${hotel?._id}`} className="block group">
      <div>
        <div className="relative">
          <Image
            src={hotel?.images[0]}
            alt={hotel?.name}
            width={700}
            height={500}
            className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
            <i className="ph-bed inline-block mr-1"></i>
            {hotel?.rooms} Rooms Left
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{hotel?.name}</h3>
            <div className="flex items-center">
              <FaStar
                className={`${
                  hotel?.totalReviews > 0 ? "text-yellow-500" : "text-gray-300"
                } size-4`}
              />

              <span className="ml-1 text-zinc-600">{hotel?.avgRating}</span>
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-1">{hotel?.location}</p>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <span className="font-bold">${hotel?.price}</span>
              <span className="text-zinc-500 text-sm ml-1">per night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeHotelCard;
