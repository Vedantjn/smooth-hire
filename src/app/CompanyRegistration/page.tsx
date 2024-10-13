import React from "react"
import RegistrationOtpVerification from "@/components/RegistrationOtpVerification"
import Link from "next/link"
import { LayoutComponent } from "@/components/layout"
const page: React.FC = () => {
  return (
    <LayoutComponent>
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-81 flex-grow">
        <div className="max-w-3xl mx-auto">           
            <RegistrationOtpVerification/>
        </div>
      </main>
    </div>
    </LayoutComponent>
  )
}

export default page