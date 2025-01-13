import PaymentSuccess from "@/components/payment/PaymentSuccess";

const PaymentSuccessPage = ({params}) => {
  const {bookingId} = params;
  return (
    <PaymentSuccess bookingId={bookingId}/>
  )
}

export default PaymentSuccessPage
