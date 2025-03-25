import React from 'react';
import {Cta, Faq, Stats, FeaturesHero, HowItWorks } from "../components";

const Features = () => {
    return (
        <>  
            {/* Hero */}
            <FeaturesHero/>
            
            {/* Stats */} 
            <Stats />

            {/* Features Section */}
            <HowItWorks />

            {/* Faq Section */}
            <Faq />

            {/* Call to Action Section */}
            <Cta />
        </>
    );
};

export default Features;
