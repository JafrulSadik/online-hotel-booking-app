import Skeleton from "./Skeleton";

const ManageHotelCardSkeleton = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-48 rounded-md" />
      </div>
      <div className="p-4 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/2" />
          <div className="flex space-x-2">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageHotelCardSkeleton;
