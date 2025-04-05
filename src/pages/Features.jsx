import React from 'react';
import {Cta, Faq, Stats, FeaturesHero, FeaturesSection, AdditionalFeatures } from "../components";

const Features = () => {
    return (
        <>  
            {/* Hero */}
            <FeaturesHero/>
            
            {/* Stats */} 
            <Stats />

            {/* Features Section */}
            <FeaturesSection />

            {/* Additional features */}
            <AdditionalFeatures />

            {/* Faq Section */}
            <Faq />

            {/* Call to Action Section */}
            <Cta />
        </>
    );
};

export default Features;
