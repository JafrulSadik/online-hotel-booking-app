import HotelListing from "@/components/home/HotelListing"
import Pagination from "@/components/home/Pagination"
import HomeHotelCardSkeletonList from "@/components/skeleton/HomeHotelCardSkeletonList"
import { Suspense } from "react"

const HomePage = ({params}) => {
  const {lang} = params
  return (
    <section className="px-6">
      <Suspense fallback={<HomeHotelCardSkeletonList/>}>
        <HotelListing lang={lang}/>
      </Suspense>
      <Pagination/>
    </section>
  )
}

export default HomePage