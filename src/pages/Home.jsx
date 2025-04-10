import React from 'react';
import { Advantage, Testimonials, Faq, BlogFeatured, PricingGrid, Cta, Brands, HomeHero, FeaturesSection } from '../components';
import HowItWorkGrid from '../components/howItWorks/HowItWorkGrid';
import Integrations from '../integrations/Integrations';

const Home = () => {
    return (
       <>
         {/* Hero */}
         <HomeHero /> 

         {/* Stats */}
         <Brands />

         {/* How It Works */}
         <HowItWorkGrid />

         {/* Features */}
         <FeaturesSection />

         {/* Advantage */}
         <Advantage />

         {/* Testimonials */}
         <Testimonials />

         {/* Faq */}
         <Faq />

         {/* Integrations */}
         <Integrations />

         {/* Pricing */}
         <PricingGrid />
         
         {/* Blogs */}
         <BlogFeatured /> 

         {/* Cta */}
         <Cta />

       </>
    );
};

export default Home;