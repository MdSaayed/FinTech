import React from 'react';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import HeroImg from '/assets/imgs/hero/home-hero.png';
import { FaApple } from "react-icons/fa";
import Button from '../components/button/Button';
import Subtitle from '../components/subtitle/Subtitle';
import Stats from '../components/stats/Stats';
import Advantage from '../components/advantage/Advantage';
import Testimonials from '../components/testimonials/Testimonials';
import Faq from '../components/faq/Faq';
import Blog from '../components/blog/Blogs';


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
                            <Button text="Get Started for Free" to='' icon={true} iconComponent={<FaApple />} />
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
         <Stats />

         {/* Features */}
         <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text={'Our Best Features'} align = "justify-center" className='bg-white'/>

                {/* Title */}
                <Title className='max-w-[664px] text-center'> Unlock the <span>full potential of</span> your organization's data! </Title>

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
         <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text={'How It works'} align = "justify-center" className='bg-white'/>

                {/* Title */}
                <Title className='max-w-[498px] text-center'>See how it all fits in <span>4 easy steps!</span></Title>

                {/* Description */}
                <Description text={'The tips and tools that teams today need to help their companies succeed.'} align='justify-center' className='max-w-[440px]' />

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-20">
                    {/* First Item */}
                    <div className="bg-white border border-purple-100 rounded-xl sm:col-span-12 md:col-span-6 lg:col-span-5">
                        <img src="/assets/imgs/how-it-works/how-it-works-1.png" alt="Sign Up Today - Illustration of user signing up" className=" max-h-64 mx-auto"  />
                        <div className="space-y-2 px-6 md:px-10 my-6">
                            <h2 className="font-geist font-medium text-2xl text-slate-900">Sign Up Today</h2>
                            <p className="font-inter text-base text-gray-700">Hello! Come along for an exciting journey and kick off your financial exploration!</p>
                        </div>
                    </div>

                    {/* Second Item */}
                    <div className="bg-white border border-purple-100 rounded-xl sm:col-span-12 md:col-span-6 lg:col-span-7">
                        <img src="/assets/imgs/how-it-works/how-it-works-2.png" alt="Set Your Goals - Illustration of goal setting" className=" max-h-64 mx-auto" />
                        <div className="space-y-2 px-6 md:px-10 my-6">
                            <h2 className="font-geist font-medium text-2xl text-slate-900">Set Your Goals</h2>
                            <p className="font-inter text-base text-gray-700">Share your financial aspirations with us, and we'll design a personalized strategy to help you achieve them!</p>
                        </div>
                    </div>

                    {/* Third Item */}
                    <div className="bg-white border border-purple-100 rounded-xl sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <img src="/assets/imgs/how-it-works/how-it-works-3.png" alt="Track Your Progress - Illustration of tracking finances" className=" max-h-64 mx-auto" />
                        <div className="space-y-2 px-6 md:px-10 my-6">
                            <h2 className="font-geist font-medium text-2xl text-slate-900">Track Your Progress</h2>
                            <p className="font-inter text-base text-gray-700">Keep track of your money effortlessly with real-time alerts! Reach your financial goals using amazing tools!</p>
                        </div>
                    </div>

                    {/* Fourth Item */}
                    <div className="bg-white border border-purple-100 rounded-xl sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <img src="/assets/imgs/how-it-works/how-it-works-4.png" alt="Achieve Success - Illustration of financial success" className=" max-h-64 mx-auto" />
                        <div className="space-y-2 px-6 md:px-10 my-6">
                            <h2 className="font-geist font-medium text-2xl text-slate-900">Achieve Success</h2>
                            <p className="font-inter text-base text-gray-700">Unlock your financial potential with amazing resources and expert advice!</p>
                        </div>
                    </div>
                </div>


            </div>
         </section>

         {/* Advantage */}
         <Advantage />

         {/* Testimonials */}
         <Testimonials />

         {/* Faq */}
         <Faq />

         {/* Blogs */}
         <Blog />
       </>
    );
};

export default Home;