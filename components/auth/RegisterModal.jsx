"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
import RegisterForm from "./RegisterForm";
import SocialLogin from "./SocialLogin";

const RegisterModal = () => {
  const router = useRouter();

  const handleCancelLogin = () => {
    router.back();
  };

  return (
    <div className="fixed  overflow-auto inset-0 pt-32 pb-10 bg-black bg-opacity-50 z-50 flex items-center justify-center custom-scrollbar">
      <div className="bg-white rounded-xl shadow-2xl w-[450px] p-6 relative shadow-black/50 ">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <MdCancel
            onClick={handleCancelLogin}
            className="text-gray-300 size-6"
          />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Sign up to Hotel Booking
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Let's get you signed in.
          </p>
        </div>

        <div className="space-y-4 mb-4">
          <SocialLogin />

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <RegisterForm />
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?
            <Link href="/login" className="text-primary hover:underline ml-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
