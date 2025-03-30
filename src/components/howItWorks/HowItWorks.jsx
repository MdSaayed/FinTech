import React, { useState, useEffect } from 'react';
import { Title, Description, Subtitle, StepCard, ErrorMessage } from '../../components';
import { howWorkLoader } from '../../routes/Loader';
import { useLoading } from '../../context/LoadingContext';

const HowItWorks = () => {
    const [works, setWorks] = useState([]); // State to hold data
    const [error, setError] = useState(''); // State to handle errors
    const { startLoading, stopLoading } = useLoading(); // Loading context

    // Fetching data when component mounts
    useEffect(() => {
        const fetchWork = async () => {
            startLoading(); // Start loading state
            try {
                const data = await howWorkLoader(); // Fetch "How It Works" data
                if (!data || data.length === 0) throw new Error("No data available."); // Handle empty response
                setWorks(data); // Store data in state
                setError(""); // Clear previous errors
            } catch (error) {
                setError("Failed to load how it works. Please try again later."); // User-friendly error message
            } finally {
                stopLoading(); // Ensure loading stops
            }
        };
        fetchWork();
    }, []); // Run only once when component mounts

    // Display error message if there's an error
    if (error) return <ErrorMessage error={error} />;

    return (
        <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text="How It Works" align="justify-center" className="bg-white" />

                {/* Title */}
                <Title className="max-w-[498px] text-center">
                    See how it all fits in <span>4 easy steps!</span>
                </Title>

                {/* Description */}
                <Description
                    text="The tips and tools that teams today need to help their companies succeed."
                    align="justify-center"
                    className="max-w-[440px]"
                />

                {/* Grid - Dynamically Render StepCards */}
                <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-20">
                    {works?.map((work, index) => {
                        {/* Card Size Shown By Conditionally */}
                        const colSpan = `
                            ${index === 0 ? 'sm:col-span-12 md:col-span-6 lg:col-span-5' : ''}
                            ${index === 1 ? 'sm:col-span-12 md:col-span-6 lg:col-span-7' : ''}
                            ${(index !== 0 && index !== 1) ? 'sm:col-span-12 md:col-span-6 lg:col-span-6' : ''}
                        `;

                        return (
                            <StepCard key={work.id || index} colSpan={colSpan} work={work} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
