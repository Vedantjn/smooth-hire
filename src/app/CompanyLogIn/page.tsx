import React from "react";
import CompanyLoginForm from "@/components/CompanyLoginForm";
import Link from "next/link";
import { LayoutComponent } from "@/components/layout";

const page: React.FC = () => {
  return (
    <LayoutComponent>
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link href="/" className="text-3xl font-bold">
            SmoothHire
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Log In</h2>
          <div className="text-lg text-gray-600 text-center">Please enter your Company Details</div>
            <CompanyLoginForm />
          </div>
        </div>
      </main>

    </div>
    </LayoutComponent>
  );
}

export default page;
