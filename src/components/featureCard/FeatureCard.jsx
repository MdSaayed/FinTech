import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { Link } from 'react-router-dom';

// Reusable FeatureCard Component
// This Component Takes Three Props: image, Title, And Description 
// To Display A Feature Card With An Image, Title, And Description.
const FeatureCard = ({ feature}) => (

    
    <div className="bg-white rounded-xl">
        {/* Image Container: Displays The Feature Image */}
        {
            feature.image && (
                <div>
                    <Link to={`features/${feature?.id}`}>
                        <img src={feature?.image} alt={feature?.title} className="w-full h-full object-cover" />
                    </Link>
                </div>
            )
        }
        
        {/* Content Container: Contains The Title And Description */}
        <div className='space-y-4 p-4 mt-10'>
            {/* Title: Displays The Feature Title */}
            <Link to={`features/${feature?.id}`}>
                <h2 className=' font-medium text-2xl text-slate-900'>{feature?.title}</h2>
            </Link>

            {/* Description: Displays The Feature Description */}
            <p className=' text-base font-normal text-gray-700'>{feature?.excerpt}</p>
        </div>
    </div>
);

// Prop Validation
FeatureCard.propTypes = {
    image: PropTypes.string.isRequired,  // image Should Be A String (URL)
    title: PropTypes.string.isRequired,   // title Should Be A String
    description: PropTypes.string.isRequired, // description Should Be A String
};

export default FeatureCard;
