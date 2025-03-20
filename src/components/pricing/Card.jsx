import React from 'react';
import PropTypes from 'prop-types';
import { GiCheckMark } from "react-icons/gi";

const Card = ({ plan, packageType }) => {
    const { name, description, packages, featuredCard } = plan;
    const selectedPackage = packages?.[packageType]; // Fix: Correctly access the package

    return (
        <div className={`rounded-2xl py-6 transition-all duration-300 group 
            ${featuredCard ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}
            hover:bg-gray-900 hover:text-white`}>

            {/* Card Header */}
            <div className="px-8 pb-0">
                <span className="font-geist font-normal text-base leading-snug">{name}</span>
                <p className="text-3xl font-geist font-medium py-2">{selectedPackage?.price}</p>
                <p>{description}</p>

                <button className={`mt-11 w-full py-3 rounded-3xl font-geist font-normal text-gray-700 
                    transition-all duration-300 
                    ${featuredCard ? 'bg-white' : 'bg-gray-100'} 
                    group-hover:bg-white group-hover:text-gray-900`}>
                    Free-14 Day Trial
                </button>
            </div>

            {/* Features List */}
            <ul className={`font-geist font-normal text-base mt-5 px-8 pt-8 space-y-4 border-t group-hover:border-gray-600 ${featuredCard ? 'border-gray-600' : 'border-gray-200'}`}>
                {selectedPackage?.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                        <GiCheckMark className={`rounded-full w-6 h-6 p-1
                            ${featuredCard ? 'bg-white' : 'bg-purple-100'} text-purple-600`} />
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
        featuredCard: PropTypes.bool
    }).isRequired,
    packageType: PropTypes.oneOf(["monthly", "yearly"]).isRequired
};

export default Card;
