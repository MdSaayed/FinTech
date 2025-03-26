import React from 'react';
import PropTypes from 'prop-types';

/**
 * AnimatedCursor Component
 * A reusable animated cursor component that follows the mouse movement.
 *
 * @param {Object} position - The position object containing x and y coordinates.
 * @param {string} imageSrc - The image source for the cursor.
 * @param {number} duration - Animation duration in milliseconds.
 * @param {string} altText - Alternative text for the image.
 * @returns {JSX.Element} The animated cursor component.
 */
const AnimatedCursor = ({ position, imageSrc, duration, altText }) => {
  return (
    <div
      className="absolute transition-all ease-in-out z-30"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transitionDuration: `${duration}ms`,
      }}
    >
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

// Prop validation
AnimatedCursor.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  imageSrc: PropTypes.string.isRequired,
  duration: PropTypes.number, // Optional, default is 5000ms
  altText: PropTypes.string, // Optional, default is "Cursor Icon"
};

// Default props
AnimatedCursor.defaultProps = {
  duration: 5000,
  altText: 'Cursor Icon',
};

export default AnimatedCursor;
