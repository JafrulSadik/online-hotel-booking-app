import ManageHotelsCard from "@/components/manage-hotels/Card"
import Link from "next/link"

const ManageHotelPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-zinc-800">Manage Hotels</h1>
        <Link href={`/user/manage-hotels/create`}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors"
        >
          + Create Hotel
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ManageHotelsCard/>
        <ManageHotelsCard/>
        <ManageHotelsCard/>
      </div>
    </div>
  </div>
  )
}

export default ManageHotelPage
