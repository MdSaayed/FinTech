import React from 'react';

const ContactInfo = () => {
    return (
        <div className="my-6 space-y-4 text-sm">
            {/* Contact Header */}
            <p className="text-base text-gray-700 font-medium">Contact:</p>

            {/* Contact Details */}
            <address className="not-italic space-y-2">
                <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="mailto:support@uiappX.com" className="hover:underline" rel="noopener noreferrer">
                        support@uiappX.com
                    </a>
                </p>
                <p className="text-gray-700">
                    <strong>Phone:</strong> 
                    <a href="tel:1234567890" className="hover:underline" rel="noopener noreferrer">
                        123-456-7890
                    </a>
                </p>
                <p className="text-gray-700">
                    <strong>Address:</strong> 123 Finance St., New York, NY 10001
                </p>
            </address>
        </div>
    );
};

export default ContactInfo;
