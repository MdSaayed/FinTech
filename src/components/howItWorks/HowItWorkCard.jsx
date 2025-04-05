import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import { Link } from 'react-router-dom';

// Reusable WorkCard Component
// This Component Takes Three Props: icon, Title, And Description 
// To Display A Work Card With An Image, Title, And Description.
const HowItWorkCard = ({ work}) => (

    
    <div className="bg-white rounded-xl py-10 px-4">
        {/* Image Container: Displays The Work Image */}
        {
            work.icon && (
                <div className='flex items-center justify-center'>
                    <div className='bg-[#F4EBFF] rounded-full  p-3'>
                        <img src={work?.icon} alt={work?.title} className="w-8 h-8 object-cover" />
                    </div>
                </div>
            )
        }
        
        {/* Content Container: Contains The Title And Description */}
        <div className='space-y-4 mt-5'>
            {/* Title: Displays The Work Title */}
            <h2 className=' font-medium text-center text-xl text-slate-900'>{work?.title}</h2>

            {/* Description: Displays The Work Description */}
            <p className=' text-sm text-center font-normal text-gray-700'>{work?.description}</p>
        </div>
    </div>
);

// Prop Validation
HowItWorkCard.propTypes = {
    icon: PropTypes.string.isRequired,  // icon Should Be A String (URL)
    title: PropTypes.string.isRequired,   // title Should Be A String
    description: PropTypes.string.isRequired, // description Should Be A String
};

export default HowItWorkCard;
