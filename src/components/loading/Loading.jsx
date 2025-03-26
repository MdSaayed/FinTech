import React from "react";
import Lottie from "lottie-react";
import { useLoading } from "../../context/LoadingContext";
import { ClipLoader } from "react-spinners";

// Loading Component To Show A Loading Spinner Or Animation
const Loading = () => {
  // Access Loading State From Context
  const { isLoading } = useLoading();

  // If Not Loading, Return Null To Prevent Rendering The Loader
  if (!isLoading) return null;

  return (
    // Background Overlay With Semi-Transparent Dark Color
    <div className="bg-slate-900 top-0 left-0 fixed w-full opacity-60 z-50">
      <div className="flex items-center justify-center h-screen">
        {/* ClipLoader Component Used To Show A Spinning Loader */}
        <ClipLoader color="#fff" size={50} />
      </div>
    </div>
  );
};

export default Loading;
