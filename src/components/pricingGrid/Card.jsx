import React from 'react';
import PropTypes from 'prop-types';
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';
 

/**
 * Card Component
 * Displays a pricing card with details about a plan, including its features, price, and a trial button.
 * Can highlight a card if it's marked as a featured plan.
 * 
 * @param {Object} plan - Plan details including name, description, packages, and featured status.
 * @param {string} packageType - The selected package type ('monthly' or 'yearly').
 * @returns {JSX.Element} The rendered card component.
 */
const Card = ({ plan, packageType }) => {
    const { name, description, packages, featuredCard,id } = plan;
    const selectedPackage = packages?.[packageType]; // Select the right package based on 'packageType' prop

    return (
        <div 
            className={`rounded-2xl py-8 transition-all duration-300 group 
            ${featuredCard ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}
            hover:bg-gray-900 hover:text-white`} 
            aria-labelledby={`${name}-card`} // Accessibility: link to the card name for screen readers
        >
            {/* Card Header */}
            <div className="px-8 pb-0">
                <span 
                    className={`${featuredCard ? 'text-white':'text-purple-600'} 
                    text-purple-600 group-hover:text-white font-geist font-normal text-base leading-snug`} 
                    id={`${name}-card`}>
                    {name}
                </span>
                <p className="text-3xl font-geist font-medium py-2">{selectedPackage?.price}</p>
                <p>{description}</p>

                <Link
                    to={`/pricing/${id}`} 
                    className={`block mt-11 w-full py-2 md:py-3 rounded-3xl font-geist font-normal text-gray-700 
                    transition-all duration-300 ${featuredCard ? 'bg-purple-600 text-white hover:bg-white hover:text-gray-700' : 'bg-gray-100'} 
                    group-hover:bg-purple-600 group-hover:text-white text-center`}
                    aria-label={`Free 14 Day Trial for ${name}`}
                >
                    Free-14 Day Trial
                </Link>
            </div>

            {/* Features List */}
            <ul 
                className={`font-geist font-normal text-base mt-5 px-8 pt-8 space-y-4 border-t group-hover:border-gray-600 
                ${featuredCard ? 'border-gray-600' : 'border-gray-200'}`} 
                aria-labelledby={`${name}-features`}
            >
                {selectedPackage?.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                        <GiCheckMark 
                            className={`rounded-full w-6 h-6 p-1
                            ${featuredCard ? 'bg-white' : 'bg-purple-100'} text-purple-600`} 
                            aria-hidden="true" // For accessibility: visually hidden icon for assistive tech
                        />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Prop Validation
Card.propTypes = {
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        packages: PropTypes.objectOf(
            PropTypes.shape({
                price: PropTypes.string.isRequired,
                features: PropTypes.arrayOf(PropTypes.string).isRequired,
            })
        ).isRequired,
        featuredCard: PropTypes.bool, // Indicates if the plan card is featured (highlighted)
    }).isRequired,
    packageType: PropTypes.oneOf(["monthly", "yearly"]).isRequired // Package type (monthly/yearly)
};

export default Card;
