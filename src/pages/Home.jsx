import React from 'react';
import { Advantage, Testimonials, Faq, BlogFeatured, PricingGrid, Cta, Brands, HomeHero, FeaturesSection } from '../components';
import HowItWorkGrid from '../components/howItWorks/HowItWorkGrid';

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