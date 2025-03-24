import React from 'react';
import { Advantage, Testimonials, Faq, BlogGrid, PricingGrid, Cta, HowItWorks, Brands, HomeHero,FeatureGrid } from '../components';


const Home = () => {
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
         <BlogGrid />

         {/* Cta */}
         <Cta />

       </>
    );
};

export default Home;