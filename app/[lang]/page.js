import HotelListing from "@/components/home/HotelListing";
import HomeHotelCardSkeletonList from "@/components/skeleton/HomeHotelCardSkeletonList";
import { Suspense } from "react";

export const generateMetadata = ({searchParams}) => {
  const search = searchParams.search;

  if(search === undefined) return {title: "Hotel Booking"}

  return {
    title: `${search ? search + " - " : ""}Hotel Booking` ,
  }
}
const HomePage = ({params, searchParams}) => {
  const {lang} = params;
  const page = searchParams.page || 1;
  const search = searchParams.search || "";
  return (
    <section className="px-6">
      <Suspense fallback={<HomeHotelCardSkeletonList/>}>
        <HotelListing lang={lang} page={page} searchTerm={search}/>
      </Suspense>
      
    </section>
  )
}

export default HomePage