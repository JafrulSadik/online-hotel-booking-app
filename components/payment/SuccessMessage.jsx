import { FaCheckCircle } from "react-icons/fa";

const SuccessMessage = () => {
  return (
    <div className="text-center my-2">
      <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
        <FaCheckCircle className="text-4xl text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-zinc-600 mb-8">
        Your booking has been confirmed. Check your email for details.
      </p>
    </div>
  );
};

export default SuccessMessage;
