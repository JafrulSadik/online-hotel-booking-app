"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "../ui/svg/GoogleIcon";
const SocialLogin = () => {
  const handleGoogleLogin = (event) => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
