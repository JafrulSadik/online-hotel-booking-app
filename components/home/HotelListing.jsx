import { getHotels } from "@/db/query/hotel-query";
import HomeHotelCard from "./HomeHotelCard";
import Pagination from "./Pagination";

const HotelListing = async ({ lang, page, searchTerm }) => {
  const response = await getHotels(page, searchTerm);
  const hotels = response?.hotels;
  const paginations = response?.pagination;

  return (
    <div className="min-h-[calc(100vh-200px)] flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels?.map((hotel) => (
          <HomeHotelCard key={hotel?._id} hotel={hotel} lang={lang} />
        ))}
      </div>

      {hotels.length === 0 && (
        <div className="text-center font-semibold text-2xl text-gray-500 w-full col-span-3">
          No hotels found
        </div>
      )}

      {paginations.totalPages > 1 && <Pagination pagination={paginations} />}
    </div>
  );
};

export default HotelListing;
