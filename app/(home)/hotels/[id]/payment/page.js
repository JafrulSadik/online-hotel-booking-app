import MainSection from "@/components/payment/MainSection"
import Link from "next/link"

const PaymentPage = ({id}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* <!-- Back Button --> */}
      <div className="mb-8">
        <Link href={`/hotels/${id}`} className="text-zinc-800 hover:underline">
          <i className="fas fa-chevron-left mr-2"></i>
          Request to book
        </Link>
      </div>
      <MainSection/>
    </div>
  )
}

export default PaymentPage
