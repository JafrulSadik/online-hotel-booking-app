import Skeleton from "./Skeleton";

const HomeHotelCardSkeleton = () => {
  return (
    <div className="block group">
      <div>
        <div className="relative">
          <Skeleton className="w-full h-64 rounded-xl" />
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <Skeleton className="w-40 h-6" />
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-1" />
              <Skeleton className="w-8 h-4" />
            </div>
          </div>
          <Skeleton className="w-32 h-4 mt-1" />
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
              <Skeleton className="w-16 h-5" />
              <Skeleton className="w-20 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHotelCardSkeleton;
