import LoginForm from "@/components/auth/LoginForm"
import GoogleIcon from "@/components/ui/svg/GoogleIcon"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center mt-5"
    >
      <div
        className="bg-white rounded-xl w-96 p-6 relative border-2 border-gray-200"
      >

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Log in to Hotel Booking
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Let's get you signed in.
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

          <LoginForm/>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Don't have an account?
            <Link href="/register" className="text-primary hover:underline ml-1">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
