// StepCard.js
import React from 'react';
import PropTypes from 'prop-types';

const StepCard = ({ imgSrc, title, description, colSpan }) => (
    <div className={`bg-white border border-purple-100 rounded-xl ${colSpan}`}>
        <img src={imgSrc} alt={title} className="max-h-64 mx-auto" />
        <div className="space-y-2 px-6 md:px-10 my-6">
            <h2 className="font-geist font-medium text-2xl text-slate-900">{title}</h2>
            <p className="font-inter text-base text-gray-700">{description}</p>
        </div>
    </div>
);

StepCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    colSpan: PropTypes.string, // Defines the column span for the grid
};

export default StepCard;   
