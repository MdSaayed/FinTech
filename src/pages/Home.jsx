import React from 'react';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import HeroImg from '/assets/imgs/hero/home-hero.png';
import { FaApple } from "react-icons/fa";
import Button from '../components/button/Button';
import Subtitle from '../components/subtitle/Subtitle';
import Advantage from '../components/advantage/Advantage';
import Testimonials from '../components/testimonials/Testimonials';
import Faq from '../components/faq/Faq';
import Blog from '../components/blog/Blogs';
import Pricing from '../components/pricing/Pricing';
import Cta from '../components/cta/Cta';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Brands from '../components/brands/Brands';


const Home = () => {
    return (
       <>
         {/* Hero */}
         <section>
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center px-5 lg:px-10 gap-y-20 py-12 bg-white rounded-xl">
                    <div className='lg:pr-20'>
                        {/* Subtitle */}
                        <Subtitle label='New' text="AI Update for January 2025"  />

                        {/* Title */}
                        <div className="mb-6">
                            <Title size='text-[2.5rem] lg:text-7xl'> Your go-to app for mastering your <span> Finances</span> </Title>
                        </div>
                        
                        {/* Description */}
                        <Description text="Managing your business finances is easier with our user-friendly SaaS platform designed for U.S. companies!" textAlign='text-left' />

                        {/* Buttons */}
                        <div className="flex gap-6 flex-wrap mt-12">
                            <Button text="Get Started for Free" to='' icon={false} iconComponent={<FaApple />} />
                            <Button text="Get Started for Free" to='' icon={true} iconComponent={<FaApple />} variant="secondary" />
                        </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
         </section>

         {/* Stats */}
         <Brands />

         {/* Features */}
         <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text={'Our Best Features'} align = "justify-center" className='bg-white'/>

                {/* Title */}
                <Title className='max-w-[664px] text-center'> Unlock the <span> full potential of  </span> your organization's data! </Title>

                {/* Description */}
                <Description text={'The tools and tricks that today’s teams need to help their companies thrive.'} align='justify-center' className='max-w-[30rem]' />

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16 mt-20">
                    <div className="bg-white rounded-xl">
                        <div className=" ">
                            <img src="/assets/imgs/features/feature-1.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className='space-y-4 p-4 mt-10'>
                            <h2 className='font-geist font-medium text-2xl text-slate-900'>Real-Time Expense Tracking</h2>
                            <p className='font-roboto text-base font-normal text-gray-700'>Monitor your spending in real-time with categorized insights for better money.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className=" ">
                            <img src="/assets/imgs/features/feature-2.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className='space-y-4 p-4 mt-10'>
                            <h2 className='font-geist font-medium text-2xl text-slate-900'>Smart Insights</h2>
                            <p className='font-roboto text-base font-normal text-gray-700'>Rely on robust security features to protect your financial data and transactions.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className=" ">
                            <img src="/assets/imgs/features/feature-3.png" alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className='space-y-4 p-4 mt-10'>
                            <h2 className='font-geist font-medium text-2xl text-slate-900'>User-Friendly Dashboard</h2>
                            <p className='font-roboto text-base font-normal text-gray-700'>Enjoy a clean, intuitive interface that simplifies complex financial data for easy understanding.</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         {/* How It Works */}
         <HowItWorks />

         {/* Advantage */}
         <Advantage />

         {/* Testimonials */}
         <Testimonials />

         {/* Faq */}
         <Faq />

         {/* Pricing */}
         <Pricing />
         
         {/* Blogs */}
         <Blog />

         {/* Cta */}
         <Cta />

       </>
    );
};

export default Home;