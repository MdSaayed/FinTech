// TestimonialCard.js
import React from 'react'; // Import React
import { Link } from 'react-router-dom';

// Image
import QuoteIcon from "/assets/icons/quote.svg";
import Wildcrafted from "/assets/imgs/global/wildcrafted.png";
import Avatar from "/assets/imgs/global/avatar.png";

/**
 * TestimonialCard Component
 * Displays a single testimonial card with user feedback and their avatar.
 * 
 * @param {string} name - Name of the user providing the testimonial.
 * @param {string} username - Username or handle of the user.
 * @param {string} testimonial - The testimonial content.
 * 
 * @returns {JSX.Element} The rendered TestimonialCard component.
 */
const TestimonialCard = ({ name, username, testimonial }) => (
    <div className="lg:col-span-2 bg-white rounded-3xl p-8 h-full">
        <img className="mb-12" src={QuoteIcon} alt="Quote Icon" /> {/* Quote Icon */}

        <h2 className="text-slate-900 leading-normal font-medium text-2xl font-geist">
            "{testimonial}"
        </h2>

        <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-between mt-16">
            <div className="flex items-center gap-3">
                <img src={Avatar} alt="User Avatar" /> {/* User Avatar */}
                <div>
                    <h2 className="text-base font-normal text-slate-900 font-geist">{name}</h2>
                    <p className="text-base font-geist text-gray-600">{username}</p> {/* User Name and Handle */}
                </div>
            </div>

            <div>
                <Link>
                    <span className="flex rounded-2xl border border-gray-500 p-2">
                        <img
                            className="w-full h-full object-cover"
                            src={Wildcrafted}
                            alt="Wildcrafted Brand"
                        /> {/* Wildcrafted Brand Image */}
                    </span>
                </Link>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
