import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for prop validation
import { SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';

// TeamCard Component: Displays an individual team member's info
const TeamCard = ({ member }) => {
    return (
        <div className="group">
            {/* Image Wrapper */}
            <div className="rounded-xl overflow-hidden">
                <img
                    className="w-full h-auto object-cover aspect-[4/5]"
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                />
            </div>

            {/* Info Section */}
            <div className="flex justify-between items-center mt-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                </div>

                {/* Social Link */}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                    <SiLinkedin className="text-xl text-gray-900 hover:text-purple-600 transition-all duration-200" />
                </a>
            </div>
        </div>
    );
};

// Prop validation for the TeamCard component
TeamCard.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,       // Name of the team member
        role: PropTypes.string.isRequired,       // Role of the team member
        image: PropTypes.string.isRequired,      // Image URL of the team member
        linkedin: PropTypes.string.isRequired,   // LinkedIn URL of the team member
    }).isRequired,
};

export default TeamCard;
