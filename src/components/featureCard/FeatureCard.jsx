import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation

// Reusable FeatureCard Component
// This Component Takes Three Props: imagesrc, Title, And Description 
// To Display A Feature Card With An Image, Title, And Description.
const FeatureCard = ({ imagesrc, title, description }) => (
    <div className="bg-white rounded-xl">
        {/* Image Container: Displays The Feature Image */}
        <div>
            <img src={imagesrc} alt={title} className="w-full h-full object-cover" />
        </div>
        
        {/* Content Container: Contains The Title And Description */}
        <div className='space-y-4 p-4 mt-10'>
            {/* Title: Displays The Feature Title */}
            <h2 className='font-geist font-medium text-2xl text-slate-900'>{title}</h2>
            
            {/* Description: Displays The Feature Description */}
            <p className='font-roboto text-base font-normal text-gray-700'>{description}</p>
        </div>
    </div>
);

// Prop Validation
FeatureCard.propTypes = {
    imagesrc: PropTypes.string.isRequired,  // imagesrc Should Be A String (URL)
    title: PropTypes.string.isRequired,   // title Should Be A String
    description: PropTypes.string.isRequired, // description Should Be A String
};

export default FeatureCard;
