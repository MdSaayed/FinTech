import React, { useEffect, useState } from 'react';
import { teamMemberLoader } from '../../routes/Loader.js'; 
import {Subtitle, Title, TeamCard, ErrorMessage,Loading } from '../../components';
import { useLoading } from "../../context/LoadingContext"; // Import Loading Context To Manage Loading State

const Team = () => {
    // State for team data, loading, and error management
    const [member, setMember] = useState([]);
    const [error, setError] = useState(null);
    const { startLoading, stopLoading } = useLoading(); // Get Loading Context Methods
    

    // Fetching team member data
    useEffect(() => {
        startLoading();
        const fetchTeamMember = async () => {
            try {
                const data = await teamMemberLoader();  // Ensure teamMemberLoader returns a Promise of an array
                setMember(data);
                
                if (!data || data.length === 0) {
                    throw new Error("No team member available."); // Handle empty response
                }

            } catch (err) {
                setError("Failed to load Team data");
            } finally {
                stopLoading();
            }
        };

        fetchTeamMember();
    }, []);  // Empty dependency array ensures this effect runs only once when the component mounts


    // Error state
    if (error) return <ErrorMessage error={error} />;

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
                    {member?.map((memberData, idx) => (
                        <TeamCard key={idx} member={memberData} />  
                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
