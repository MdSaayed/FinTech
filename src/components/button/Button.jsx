import React from 'react';
import { FaHome } from 'react-icons/fa'; // Example icon (you can use any icon)
import { Link } from 'react-router-dom';

const Button = ({ text, to='#', icon = false, iconComponent = null, variant = 'primary', className = '', ...props }) => {
  const isPrimary = variant === 'primary'; // Check if it's a primary button

  return (
    <Link
      to={to}
      className={`
        group flex items-center justify-center space-x-3 px-4 py-2 font-normal font-geist text-base transition-colors duration-300 rounded-3xl 
        ${isPrimary ? 'bg-neutral-900 text-white hover:bg-gray-100 hover:text-gray-700' 
        :'bg-gray-100 hover:bg-neutral-900 hover:text-white text-gray-700'}
        ${className}
        `}
      {...props}>
      {/* Conditionally render icon */}
      {icon && iconComponent && (
        <span className='text-center'>{iconComponent}</span>
      )}
      {/* Render button text */}
      <span className='text-center'>{text}</span>
    </Link>
  );
};

export default Button;
