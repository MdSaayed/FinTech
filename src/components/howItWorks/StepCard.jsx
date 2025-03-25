// StepCard.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * StepCard Component
 * A reusable card component that displays an image, title, and description.
 * Can be used in a grid layout where the column span can be customized.
 * 
 * @param {string} imgSrc - The source URL for the image to be displayed.
 * @param {string} title - The title of the step or card.
 * @param {string} description - The description or content of the card.
 * @param {string} colSpan - A class to define the column span for the card in a grid (e.g., "lg:col-span-2").
 */
const StepCard = ({ imgSrc, title, description, colSpan = '' }) => (
    <div className={`bg-white border border-purple-100 rounded-xl ${colSpan}`}>
        {/* Image */}
        <img src={imgSrc} alt={title} className="max-h-64 mx-auto" />

        {/* Content */}
        <div className="space-y-2 px-6 md:px-10 my-6">
            {/* Title */}
            <h2 className="font-geist font-medium text-2xl text-slate-900">{title}</h2>

            {/* Description */}
            <p className="font-inter text-base text-gray-700">{description}</p>
        </div>
    </div>
);

// Prop types validation
StepCard.propTypes = {
    imgSrc: PropTypes.string.isRequired, // The image source URL (string)
    title: PropTypes.string.isRequired, // The title of the card (string)
    description: PropTypes.string.isRequired, // The description content (string)
    colSpan: PropTypes.string, // Optional: CSS class for grid column span
};

// Default props for colSpan if not passed
StepCard.defaultProps = {
    colSpan: '', // Default to empty string if no colSpan is provided
};

export default StepCard;
