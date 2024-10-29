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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8  flex-grow">
        <div className="max-w-3xl mx-auto">
          <CompanyLoginForm />
        </div>
      </main>
    </div>
    </LayoutComponent>
  );
}

export default page;