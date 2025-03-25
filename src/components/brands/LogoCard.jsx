import React from 'react';
import PropTypes from 'prop-types';

/**
 * LogoCard Component
 * This component is used to display a single brand logo.
 * It accepts a logo image as a prop and renders it within a responsive container.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.logo - The source URL of the brand logo image.
 * 
 * @returns {JSX.Element} The rendered LogoCard component.
 */
const LogoCard = ({ logo }) => {
    return (
        <div className="flex justify-center items-center">
            <img
                className="w-full h-full max-w-xs max-h-16 object-contain"
                src={logo}
                alt="Brand Logo" // Accessible alt text to describe the image
            />
        </div>
    );
};

// PropTypes for the expected structure of props
LogoCard.propTypes = {
    logo: PropTypes.string.isRequired, // logo is a required prop of type string (URL of the logo image)
};

export default LogoCard;
