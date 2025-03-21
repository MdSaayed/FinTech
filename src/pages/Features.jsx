import React from 'react';
import Cta from '../components/cta/Cta';
import Faq from '../components/faq/Faq';
import FeaturesSection from '../components/howItWorks/HowItWorks';
import Stats from '../components/stats/Stats';
import FeaturesHero from '../components/hero/FeaturesHero';

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
