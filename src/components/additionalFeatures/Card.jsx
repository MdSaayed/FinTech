import React from 'react';
import PropTypes from 'prop-types'; // For runtime prop validation

// Reusable Card Component
// This component displays a feature/work card with an icon, title, and description.
// It receives a single prop: 'item' (an object containing icon, title, and description).
const Card = ({ item }) => (
    <div className="bg-sky-50 bg-opacity-70 rounded-xl py-10 px-4">
        
        {/* Icon Section - Only renders if icon is provided */}
        {item.icon && (
            <div className='flex items-center justify-center'>
                <div className='bg-white rounded-full p-3'>
                    <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="w-8 h-8 object-cover" 
                    />
                </div>
            </div>
        )}

        {/* Text Section - Displays title and description */}
        <div className='space-y-4 mt-5'>
            <h2 className='text-xl font-medium text-center text-slate-900'>
                {item.title}
            </h2>
            <p className='text-sm text-center font-normal text-gray-700'>
                {item.description}
            </p>
        </div>
    </div>
);

// Prop Validation for 'item' object
Card.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.string.isRequired,        // Icon URL
        title: PropTypes.string.isRequired,       // Title text
        description: PropTypes.string.isRequired, // Description text
    }).isRequired,
};

export default Card;
