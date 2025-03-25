import React from 'react';

/** 
 * TermsSection Component 
 * Reusable Section Component For Terms Page
 */
const TermsSection = ({ title, content }) => {
    return (
        <div className="space-y-4 mt-12">
            {/* Section Title */}
            <h3 className='text-slate-800 font-semibold text-2xl font-geist'>{title}</h3>
            
            {/* Section Content */}
            <p className='leading-normal font-geist mt-4 text-gray-700 text-base text-left'>{content}</p>
        </div>
    );
};

export default TermsSection;
