import { getHotelsByUserInfo } from "@/db/query";
import { auth } from "@/lib/auth/auth";
import ManageHotelsCard from "./ManageHotelsCard";

const ManageHotelList = async ({ lang }) => {
  const session = await auth();
  const hotels = await getHotelsByUserInfo(session.user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels?.map((hotel) => (
        <ManageHotelsCard key={hotel._id} hotel={hotel} lang={lang} />
      ))}

      {hotels.length === 0 && (
        <div className="flex justify-center text-center mt-36 font-semibold text-2xl text-gray-500 w-full col-span-3">
          No hotels found
        </div>
      )}
    </div>
  );
};

export default ManageHotelList;
