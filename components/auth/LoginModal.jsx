"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

const LoginModal = () => {
  const router = useRouter();

  const handleCancelLogin = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <MdCancel
            onClick={handleCancelLogin}
            className="text-gray-300 size-6"
          />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Log in to Hotel Booking
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

          <LoginForm />
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Don't have an account?
            <Link
              href="/register"
              className="text-primary hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
