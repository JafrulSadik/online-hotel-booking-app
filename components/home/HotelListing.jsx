import { getHotels } from "@/db/query";
import HomeHotelCard from "./HomeHotelCard";

const HotelListing = async ({ lang }) => {
  const hotels = await getHotels();

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hotels?.map((hotel) => (
        <HomeHotelCard key={hotel?._id} hotel={hotel} lang={lang} />
      ))}
    </div>
  );
};

export default HotelListing;
