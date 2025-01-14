import { getHotels } from "@/db/query/hotel-query";
import HomeHotelCard from "./HomeHotelCard";
import Pagination from "./Pagination";

const HotelListing = async ({ lang, page, searchTerm }) => {
  const response = await getHotels(page, searchTerm);
  const hotels = response?.hotels;
  const paginations = response?.pagination;

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels?.map((hotel) => (
          <HomeHotelCard key={hotel?._id} hotel={hotel} lang={lang} />
        ))}
      </div>

      {paginations.totalPages > 1 && <Pagination pagination={paginations} />}
    </>
  );
};

export default HotelListing;
