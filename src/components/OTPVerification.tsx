"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface OTPInputProps {
  verificationEmail: string|null;
}

const OTPVerification: React.FC<OTPInputProps> = ({
  verificationEmail
}) => {
  const OTPlength = 6;
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(new Array(OTPlength).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextElementSibling && element.value !== "") {
      (element.nextElementSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    element: HTMLInputElement,
    index: number,
    e: React.KeyboardEvent
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (element.previousElementSibling) {
        (element.previousElementSibling as HTMLInputElement).focus();
      }
    }
  };

  useEffect(() => {
    setIsButtonDisabled(otp.includes(""));
    setShowAlert(false);
  }, [otp]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setVerifying(true);
    setIsButtonDisabled(true);
    console.log(verificationEmail)
    // verify(Number(otp.join("")))
    // if (OTPKey != Number(otp.join(""))) {
    //   setShowAlert(true);
    //   setVerifying(false);
    // } else {
    //   // cookieStore.set("sessionId", cookieId, { maxAge: 604800 });
      router.push("/companyB/DashBoard");
    // }
  };

  return (
    <>
    <h2 className="text-2xl font-bold mb-2 text-center">Verify your OTP</h2>
    <div className="text-lg text-gray-600 mb-6 text-center">Please enter your code that we have sent to your Email Address</div>
    <form
        onSubmit={(e)=>{handleVerify(e)}}
        className="max-w-2xl mx-auto space-y-4 bg-white px-8 py-8 rounded-lg shadow-lg"
      >
      <div className="flex space-x-2 md:space-x-4 justify-center my-6">
        {otp.map((data, index) => (
          <input
            key={index}
            className="w-12 h-12 font-semibold text-xl text-center bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition duration-75 ease-in-out"
            type="text"
            name="otp"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) =>
              handleKeyDown(e.target as HTMLInputElement, index, e)
            }
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
      <button
        // type="submit"
        className={`${
          isButtonDisabled
            ? "bg-slate-300 cursor-not-allowed"
            : "bg-black hover:bg-gray-800"
        } w-3/5 my-4 mx-auto flex justify-center py-3 px-6 rounded-lg shadow-sm text-white bg-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-150 ease-in-out cursor-pointer`}
        disabled={isButtonDisabled}
      >
        {verifying ? "Verifying..." : "Verify"}
      </button>
      {showAlert ? (
        <div className="my-3 font-semibold text-center text-red-600 text-lg">
          You've Entered Incorrect Code!
        </div>
      ) : (
        <></>
      )}
      <div className="cursor-pointer font-semibold text-center text-blue-500 hover:underline text-lg">
        Resend Code
      </div>
      </form>
    </>
  );
};

export default OTPVerification;
