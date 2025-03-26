import React from 'react';
import { Advantage, Testimonials, Faq, BlogFeatured, PricingGrid, Cta, HowItWorks, Brands, HomeHero,FeatureGrid } from '../components';

const Index = () => {
    return (
       <>
         {/* Hero */}
         <HomeHero /> 

         {/* Stats */}
         <Brands />

         {/* Features */}
         <FeatureGrid />

         {/* How It Works */}
         <HowItWorks />

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

export default Index;