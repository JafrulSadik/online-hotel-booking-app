import RegisterForm from "@/components/auth/RegisterForm"
import GoogleIcon from "@/components/ui/svg/GoogleIcon"
import Link from "next/link"

const RegisterPage = () => {
  return (
    <div
      className="flex items-center justify-center mt-5"
    >
      <div
        className="bg-white rounded-xl w-[450px] p-6 relative border-2 border-gray-200"
      >

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Sign Up to Hotel Booking
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome! Let's get you signed up.
          </p>
        </div>

        <div className="space-y-4 mb-4">
          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
          >
            <GoogleIcon/>
            Continue with Google
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <RegisterForm/>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?
            <Link href="/login" className="text-primary hover:underline ml-1">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
