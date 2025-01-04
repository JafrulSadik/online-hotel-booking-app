import HomeHotelCardSkeleton from "./HomeHotelCardSkeleton";

const HomeHotelCardSkeletonList = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <HomeHotelCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default HomeHotelCardSkeletonList;
