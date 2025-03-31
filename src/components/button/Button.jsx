import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Link } from 'react-router-dom';

/**
 * Button Component
 * A flexible button component that can display an optional icon and text.
 * It supports different styles based on the 'variant' prop (primary or secondary).
 * Can be linked to a route or external URL via the 'to' prop.
 *
 * @param {string} text - The text to display inside the button.
 * @param {string} to - The URL or route to navigate to when the button is clicked.
 * @param {boolean} icon - A flag to display an icon within the button.
 * @param {ReactNode} iconComponent - The icon component to display within the button (optional).
 * @param {string} variant - The button style ('primary' or 'secondary').
 * @param {string} className - Custom classes to add to the button for styling.
 * @param {Object} props - Any additional props (e.g., event handlers).
 * @returns {JSX.Element} The Button component.
 */
const Button = ({ text, to= '#', icon = false, iconComponent = null, variant = 'primary', className = '', ...props }) => {
  const isPrimary = variant === 'primary'; // Check if it's a primary button

  return (
    <Link
      to={to} // Use 'to' prop for routing in React Router
      className={`
        group flex items-center justify-center space-x-3 px-4 py-2 font-normal  text-base transition-colors duration-300 rounded-3xl 
        ${isPrimary ? 'bg-neutral-900 text-white hover:bg-purple-600' 
        :'bg-gray-100 hover:bg-neutral-900 hover:text-white text-gray-700'}
        ${className} // Apply custom classes passed via props
        `}
      {...props}
    >
      {/* Conditionally render the icon if the 'icon' prop is true and 'iconComponent' is provided */}
      {icon && iconComponent && (
        <span className='text-center'>{iconComponent}</span>
      )}
      {/* Render the button text */}
      <span className='text-center'>{text}</span>
    </Link>
  );
};

// Prop validation to ensure correct data types are passed to the component
Button.propTypes = {
  text: PropTypes.string.isRequired, // 'text' should always be a string and is required
  to: PropTypes.string, // 'to' is a string representing the URL or route (replaces 'link' prop)
  icon: PropTypes.bool, // 'icon' is a boolean to toggle icon display
  iconComponent: PropTypes.node, // 'iconComponent' should be a React node (icon component)
  variant: PropTypes.oneOf(['primary', 'secondary']), // 'variant' can either be 'primary' or 'secondary'
  className: PropTypes.string, // 'className' is an optional string to add custom CSS classes
};

Button.defaultProps = {
  to: '#', // Default 'to' is '#', which doesn't lead anywhere
  icon: false, // Default to not displaying an icon
  iconComponent: null, // Default to no icon component
  variant: 'primary', // Default to primary button style
  className: '', // Default to no additional className
};

export default Button;
