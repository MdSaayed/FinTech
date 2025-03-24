import React, { useEffect, useState } from 'react';
import { teamMemberLoader } from '../../routes/Loader.js'; 
import Subtitle from '../subtitle/Subtitle.jsx';
import Title from '../title/Title.jsx';
import { SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';

const Team = () => {
    const [member,setMember]=useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const data = await teamMemberLoader();  // Ensure blogLoader is returning a Promise of an array
                setMember(data);
            } catch (err) {
                setError("Failed to load Team data");
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMember();
    }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

    return (
            <section>
                <div className="container">
                    {/* Subtitle */}
                    <Subtitle text="Team" align="justify-center" />

                    {/* Title */}
                    <Title className="text-center max-w-2xl">
                    Fuelling ventures with best <span>expertise</span> in the field
                    </Title>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-12 mt-12 sm:mt-16">
                    {member?.map((member, idx) => (
                        <div key={idx} className="group">
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
                                <SiLinkedin className="text-xl text-gray-900 hover:text-blue-600 transition-all duration-200" />
                            </a>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
    );
};

export default Team;