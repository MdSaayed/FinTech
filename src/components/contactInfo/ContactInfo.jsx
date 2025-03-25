import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for validation

/** 
 * ContactInfo Component: 
 * Displays individual contact details like phone number, email, or location.
 * Ensures reusable and clean structure for displaying contact info.
 */
const ContactInfo = ({ icon, label, value }) => (
    <div className="flex items-center space-x-4 border border-slate-800 px-6 py-4 rounded-2xl">
        {/* Contact Icon */}
        <img
            src={icon} // Icon representing the contact info type
            alt={label} // Alt text for the image
            className="bg-slate-800 h-8 w-8 rounded-full p-2 object-contain"
            loading="lazy" // Lazy load the image for better performance
        />
        <div>
            {/* Label for the contact info */}
            <p className="text-gray-400 text-sm">{label}</p>
            {/* The contact info value (e.g., phone number or email address) */}
            <p className="text-lg">{value}</p>
        </div>
    </div>
);

// PropTypes validation
ContactInfo.propTypes = {
    icon: PropTypes.string.isRequired, // Icon URL is required and should be a string
    label: PropTypes.string.isRequired, // Label (e.g., "Phone number") is required and should be a string
    value: PropTypes.string.isRequired, // Value (e.g., "+123 456 789") is required and should be a string
};

export default ContactInfo;
