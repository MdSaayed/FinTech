import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const Success = () => {
  const { width, height } = useWindowSize();
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  useEffect(() => {
    // Prevent scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackHome = () => {
    setIsConfettiActive(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 w-full h-screen">
      {/* Confetti Animation (Fixed to prevent scroll issues) */}
      {isConfettiActive && (
        <Confetti 
          width={width} 
          height={height} 
          numberOfPieces={300} 
          style={{ position: "fixed", top: 0, left: 0 }}
        />
      )}
      
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md text-center w-full">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="text-gray-700 mt-4 text-lg">Thank you for your purchase. Your transaction has been completed successfully.</p>
        
        <Link
          to="/"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-[32px] text-lg font-semibold hover:bg-purple-700 transition"
          onClick={handleBackHome}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
