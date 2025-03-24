import React from "react";
import PropTypes from "prop-types";

const Description = ({ text="", align="justify-center", textAlign = "text-center", className="" }) => {
  return (
    <div className={`flex mt-5 ${align}`}>
      <p className={`text-gray-700 text-lg font-geist tracking-[0.6] ${textAlign} ${className}`}>
        {text}
      </p>
    </div>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  className: PropTypes.string,
  textAlign: PropTypes.string,
};

export default Description;

  
