import { useRef, useState } from "react";

const useOtpInput = (length) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;

      setOtp(updatedOtp);

      // Move to the next input field if a digit is entered
      if (value && index < length - 1) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otp];

      if (otp[index] === "") {
        if (index > 0) {
          otpRefs.current[index - 1]?.focus();
        }
      } else {
        updatedOtp[index] = ""; // Clear the current field
      }

      setOtp(updatedOtp);
    }
  };

  const handleInputFocus = (index) => {
    otpRefs.current[index]?.focus();
  };

  const resetOtp = () => {
    setOtp(Array(length).fill(""));
    otpRefs.current[0]?.focus();
  };

  return {
    otp,
    otpRefs,
    handleOtpChange,
    handleBackspace,
    handleInputFocus,
    resetOtp,
  };
};

export default useOtpInput;
