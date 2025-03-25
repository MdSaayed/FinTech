import React from 'react';
import {Brands,Advantage,Testimonials,Faq,BlogGrid,Team,AboutHero} from '../components';


const About = () => {
    return (
        <>
            {/* Hero */}
            <AboutHero/>

            {/* Brands */}
            <Brands/>

            {/* Team */}
            <Team/>

            {/* Advantage */}
            <Advantage />

            {/* Testimonials */}
            <Testimonials />

            {/* Faq */}
            <Faq/>

            {/* Blog */}
            <BlogGrid/>
        </>
    );
};

export default About;