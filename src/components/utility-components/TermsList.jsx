import React from "react";
import PropTypes from "prop-types";

/** 
 * TermsList Component 
 * Reusable List Component For User Responsibilities 
 */
const TermsList = ({ items, className = " text-base mt-12" }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null; // Avoid rendering empty lists
  }

  return (
    <ul className={`list-none ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="relative font-geist font-normal text-gray-600 pl-5 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

// Prop Types Validation
TermsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default TermsList;