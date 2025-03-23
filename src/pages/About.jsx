import React from 'react';
import Subtitle from '../components/subtitle/Subtitle';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import Brands from './../components/brands/Brands';
import Advantage from './../components/advantage/Advantage';
import Testimonials from './../components/testimonials/Testimonials';
import Faq from './../components/faq/Faq';
import Blog from '../components/blog/BlogGrid';
import Cta from './../components/cta/Cta';
import Team from '../components/team/Team';


const About = () => {
    return (
        <>
            <section>
                <div className="container section-padding-0">
                    <div className="bg-white px-2 md:px-5 lg:px-10 py-16 rounded-2xl">
                        {/* Subtitle */}
                        <Subtitle text='About' align='justify-center' />

                        {/* Title */}
                        <Title className='max-w-2xl text-center'>Hey there! Let’s chat <span> about UIAppX.</span></Title>

                        {/* Description */}
                        <Description text='We provide cool tools and friendly support to help people and businesses reach their money goals and succeed in the long run.' className='max-w-[600px]' />

                        {/* Img */}
                        <div className='rounded-xl mt-12'>
                            <img src="/assets/imgs/global/about-banner.png" alt="Banner Img" />
                        </div>

                        {/* Content */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'>
                            <h2 className='text-slate-900 text-4xl font-geist font-medium max-w-md leading-tight' >Make managing your money a breeze and save some time with Fintab!</h2>

                            <div className='space-y-6'>
                                <p className='font-inter text-lg text-gray-700'>We offer cool tools and friendly support to help people and businesses reach their money goals and find lasting success.</p>

                                <p className='font-inter text-lg text-gray-700'>Our goal is to give you awesome financial tools and helpful advice, so you can easily manage your money, hit your targets, and build a bright future.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            <Blog/>

            {/* Cta */}
            <Cta />

        </>
    );
};

export default About;