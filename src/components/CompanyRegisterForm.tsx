"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  password: string;
};
interface CompanyRegisterFormProps {
  setVerificationEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const CompanyRegisterForm: React.FC<CompanyRegisterFormProps> = ({
  setVerificationEmail,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      //   const response = await axios.post('/api/companyregsiter', { ...data })
      //   console.log('Application submitted:', response.data)
      console.log("Application submitted:", data);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setSubmitting(false);
      setVerificationEmail("abc@xyz.com");
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-2 text-center">
        Register your Company
      </h2>
      <div className="text-lg text-gray-600 text-center">
        Please enter your Company Details
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-4 bg-white px-8 py-8 rounded-lg shadow-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-black"
          >
            Company Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="pointer mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-black">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-black"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-black">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-black"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 block w-full px-4 py-3 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-150 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-6 border border-black rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out cursor-pointer"
          disabled={submitting}
        >
          {submitting ? "Processing..." : "Register"}
        </button>
        <p className="text-center text-lg">
          Your Company is Already Register{" "}
          <Link href="/CompanyLogIn" className="hover:underline text-blue-600">
            Log In
          </Link>
        </p>
      </form>
    </>
  );
};

export default CompanyRegisterForm;
