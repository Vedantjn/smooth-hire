"use client"
import React, { useState } from "react";
import CompanyRegisterForm from "@/components/CompanyRegisterForm";
import OTPVerification from "@/components/OTPVerification";

const RegistrationOtpVerification: React.FC = () => {
  const [verificationEmail, setVerificationEmail] = useState<string | null>(null);
  return (
    <>
      {verificationEmail ? (
          <OTPVerification verificationEmail={verificationEmail} />
        ) : (
          <CompanyRegisterForm setVerificationEmail={setVerificationEmail} />
      )}
    </>
  );
}

export default RegistrationOtpVerification;
