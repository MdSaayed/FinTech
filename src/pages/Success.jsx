import React, { useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const Success = () => {
  const { width, height } = useWindowSize();
  const [isConfettiActive, setIsConfettiActive] = useState(true);

  const handleBackHome = () => {
    setIsConfettiActive(false); // Stop confetti when navigating back
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 overflow-hidden">
      {/* Confetti Animation (Runs Until User Clicks Back) */}
      {isConfettiActive && <Confetti width={width} height={height} numberOfPieces={300} />}
      
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p className="text-gray-700 mt-4 text-lg">Thank you for your purchase. Your transaction has been completed successfully.</p>
        
        <Link
          to="/"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-[32px] text-lg font-semibold hover:bg-purple-700 transition"
          onClick={handleBackHome} // Stop confetti when clicking
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
