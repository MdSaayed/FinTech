import React from "react";
import { MdArrowForwardIos } from "react-icons/md";


const Subtitle = ({ label = "New", text, className = "" }) => {
  return (
    <div className={`inline-flex items-center space-x-2 bg-[#F9F5FF] text-gray-900 text-sm p-1 rounded-full mb-5 ${className}`}>
      {/* Badge */}
      <span className="flex items-center space-x-1 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span>{label}</span>
      </span>

      {/* Main Text */}
      <span className="text-gray-700 text-sm font-geist font-normal">{text}</span>

      {/* Arrow Icon */}
      <MdArrowForwardIos className="text-gray-500 text-base" />
    </div>
  );
};

export default Subtitle;
