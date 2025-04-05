import React from 'react';
import {Cta, Faq, Stats, FeaturesHero, FeaturesSection } from "../components";

const Features = () => {
    return (
        <>  
            {/* Hero */}
            <FeaturesHero/>
            
            {/* Stats */} 
            <Stats />

            {/* Features Section */}
            <FeaturesSection />

            {/* Faq Section */}
            <Faq />

            {/* Call to Action Section */}
            <Cta />
        </>
    );
};

export default Features;
