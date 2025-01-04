import { getHotelsByUserInfo } from "@/db/query";
import { auth } from "@/lib/auth/auth";
import ManageHotelsCard from "./ManageHotelsCard";

const ManageHotelList = async () => {
  const session = await auth();
  const wait = await new Promise((resolve) => setTimeout(resolve, 1000));

  const hotels = await getHotelsByUserInfo(session.user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels?.map((hotel) => (
        <ManageHotelsCard key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};

export default ManageHotelList;
