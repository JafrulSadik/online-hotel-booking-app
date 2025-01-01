import HotelListing from "@/components/home/HotelListing"
import Pagination from "@/components/home/Pagination"

const HomePage = () => {
  return (
    <section className="px-6">
      <HotelListing/>
      <Pagination/>
    </section>
  )
}

export default HomePage