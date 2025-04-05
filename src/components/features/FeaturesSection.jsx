import React, { useState, useEffect } from 'react';
import { Title, Description, Subtitle, StepCard, ErrorMessage, Button } from '..';
import { useLoading } from '../../context/LoadingContext';
import { featuresLoader } from '../../routes/Loader';

const Features = () => {
    const [features, setFeatures] = useState([]); // State to hold data
    const [error, setError] = useState(''); // State to handle errors
    const { startLoading, stopLoading } = useLoading(); // Loading context

    // Fetching data when component mounts
    useEffect(() => {
        const fetchWork = async () => {
            startLoading(); // Start loading state
            try {
                const data = await featuresLoader(); // Fetch features data
                if (!data || data.length === 0) throw new Error("No data available."); // Handle empty response
                setFeatures(data); // Store data in state
                setError(""); // Clear previous errors
            } catch (error) {
                setError("Failed to load how it features. Please try again later."); // User-friendly error message
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
                <Subtitle text="Our features" align="justify-center" className="bg-white" />

                {/* Title */}
                <Title className="max-w-2xl text-center">
                    Everything comes together in just <span>4 easy steps!</span>
                </Title>

                {/* Description */}
                <Description
                    text="The tips and tools that teams today need to help their companies succeed."
                    align="justify-center"
                    className="max-w-[440px]"
                />

                {/* Grid - Dynamically Render StepCards */}
                <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-20">
                    {features?.map((feature, index) => {
                        {/* Card Size Shown By Conditionally */}
                        const colSpan = `
                            ${index === 0 ? 'sm:col-span-12 md:col-span-6 lg:col-span-5' : ''}
                            ${index === 1 ? 'sm:col-span-12 md:col-span-6 lg:col-span-7' : ''}
                            ${(index !== 0 && index !== 1) ? 'sm:col-span-12 md:col-span-6 lg:col-span-6' : ''}
                        `;

                        return (
                            <StepCard key={feature.id || index} colSpan={colSpan} feature={feature} />
                        );
                    })}

                    </div>
                    <div className="flex items-center justify-center mt-16 gap-6">
                        <Button variant="secondary" text="Browse all features" to='/features' />
                        <Button variant="primary" text="Get started for free" to='/pricing' />
                    </div>
            </div>
        </section>
    );
};

export default Features;
