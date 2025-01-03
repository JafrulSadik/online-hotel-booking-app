"use client";

import { successToast } from "@/utils/notify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Field from "./Field";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (formData) => {
    try {
      const response = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (response.error) {
        setError("root.random", { message: "Wrong credentials!" });
      } else {
        successToast("Logged in successfully!");
        router.push("/");
      }
    } catch (error) {
      setError("root.random", { message: error.message });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Field error={errors.email}>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </Field>

      <Field error={errors.password}>
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("password", {
            required: "Password is required.",
          })}
        />
      </Field>

      <p className="text-red-400 my-3 text-left">
        {errors?.root?.random?.message}
      </p>

      <button
        type="submit"
        className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition"
      >
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
