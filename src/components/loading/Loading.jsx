import React from "react";
import Lottie from "lottie-react";
import { useLoading } from "../../context/LoadingContext";

const Loading = () => {
  const { isLoading, animationData } = useLoading();

  if (!isLoading || !animationData) return null;

  return (
    <div className="bg-slate-900 top-0 left-0 fixed w-full opacity-60 z-50">
      <div className="flex items-center justify-center h-screen">
        <Lottie animationData={animationData} loop={true} className="w-20 h-20" />
      </div>
    </div>
  );
};

export default Loading;
