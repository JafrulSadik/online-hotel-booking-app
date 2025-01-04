import ManageHotelCardSkeleton from "./ManageHotelCardSekeleton";

const ManageHotelSekeletonList = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(3)
        .fill("")
        .map((_, i) => (
          <ManageHotelCardSkeleton key={i} />
        ))}
    </div>
  );
};

export default ManageHotelSekeletonList;
