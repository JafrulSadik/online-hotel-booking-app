import PaymentSuccess from "@/components/payment/PaymentSuccess";
import { auth } from "@/lib/auth/auth";

const PaymentSuccessPage = async ({params}) => {
    const session = await auth()
    if (!session?.user) {
      redirect("/login")
    }
  const {bookingId} = params;
  return (
    <PaymentSuccess bookingId={bookingId}/>
  )
}

export default PaymentSuccessPage
