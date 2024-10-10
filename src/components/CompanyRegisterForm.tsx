"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {


      console.log("Application submitted:", data);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setSubmitting(false);
      setVerificationEmail("abc@xyz.com");
      router.push("/companyA/DashBoard");
    }
  };

  return (

    <div className="min-h-screen bg-white flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

        <h2 className="text-4xl font-extrabold text-black text-center mb-4">
          Register your Company
        </h2>

        <p className="text-lg text-gray-600 text-center mb-6">
          Please enter your Company Details
        </p>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10 border border-black">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Company Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-black">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-black">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  className="appearance-none block w-full px-3 py-2 border border-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                disabled={submitting}
              >
                {submitting ? "Processing..." : "Register"}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Your Company is Already Registered?{" "}
              <Link href="/CompanyLogIn" className="font-medium text-black hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegisterForm;
