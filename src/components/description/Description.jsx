import React from 'react';

const Description = ({ text, className = '' }) => {
    return <p className={`text-gray-700 text-lg font-geist tracking-[0.6] ${className}`}>{text}</p>;
  };
  
export default Description;
  
