import React from "react";
import PropTypes from "prop-types";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

/**
 * Subtitle Component - A Reusable Subtitle Element With Icons And Styled Text.
 * 
 * - Displays A Subtitle With An Optional Label.
 * - Uses Flexbox For Alignment And Can Be Customized Via Props.
 * - Default Values Are Provided For Better Flexibility.
 * - Ensures Proper Styling And Responsiveness For ThemeForest Standards.
 */

const Subtitle = ({ 
  label = "", 
  text = "Default subtitle text", 
  align = "justify-center", 
  className = "" 
}) => {
  return (
    <div className={`flex ${align}`}>
      <div className={`inline-flex items-center space-x-2 bg-white text-gray-900 text-sm px-2 py-1 rounded-full mb-5 ${className}`}>
        
        {/* Displays Label If Provided, Otherwise Shows Default Icon */}
        {label ? (
          <span className="flex items-center space-x-1 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 bg-white border border-purple-300 rounded-full"></span>
            <span>{label}</span>
          </span>
        ) : (
          <FaRegCircle className="text-purple-500" />
        )}
        
        {/* Subtitle Text */}
        <span className={`${label ? 'border-l border-gray-300 pl-2' : ''} text-gray-700 text-sm font-geist font-normal leading-tight`}>
          {text}
        </span>
        
        {/* Arrow Icon */}
        <MdArrowForwardIos className="text-gray-500 text-sm" />
      </div>
    </div>
  );
};

// Prop Validation
Subtitle.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,  
  align: PropTypes.string,
  className: PropTypes.string,
};

export default Subtitle;
