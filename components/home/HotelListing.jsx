import HotelCard from "./HotelCard";

const HotelListing = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(6)
        .fill()
        .map((_, i) => (
          <HotelCard key={i} />
        ))}
    </div>
  );
};

export default HotelListing;
