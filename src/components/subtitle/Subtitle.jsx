import React from "react";
import PropTypes from "prop-types";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

const Subtitle = ({ label, text, align, className }) => {
  return (
    <div className={`flex ${align}`}>
      <div className={`inline-flex items-center space-x-2 bg-[#F9F5FF] text-gray-900 text-sm px-2 py-1 rounded-full mb-5 ${className}`}>
        {label ? (
          <span className="flex items-center space-x-1 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 bg-white border border-purple-300 rounded-full"></span>
            <span>{label}</span>
          </span>
        ) : (
          <FaRegCircle className="text-purple-500" />
        )}
        
        <span className={`${label ? 'border-l border-gray-300 pl-2' : ''} text-gray-700 text-sm font-geist font-normal leading-tight`}>{text}</span>
        <MdArrowForwardIos className="text-gray-500 text-sm" />
      </div>
    </div>
  );
};

Subtitle.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  label: "",
  align: "justify-start",
  className: "",
};

export default Subtitle;
