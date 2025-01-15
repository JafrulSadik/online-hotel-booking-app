"use client";

import { successToast } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Field from "./Field";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("root.random", {
        type: "random",
        message: "Password and confirm password doesn't match.",
      });
      return;
    }

    const fname = formData.fname;
    const lname = formData.lname;
    const email = formData.email;
    const password = formData.password;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        successToast(data.message);
        router.push("/login");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError("root.random", {
        message: error.message,
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Field error={errors.fname}>
        <input
          name="fname"
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("fname", {
            required: "First name is required.",
            validate: (value) => {
              return value.trim() !== "" || "First name can't be empty.";
            },
          })}
        />
      </Field>

      <Field error={errors.lname}>
        <input
          name="lname"
          type="text"
          placeholder="Last name"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("lname")}
        />
      </Field>

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
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
      </Field>

      <Field error={errors.confirmPassword}>
        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("confirmPassword", {
            required: "Confirm password is required.",
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

export default RegisterForm;
