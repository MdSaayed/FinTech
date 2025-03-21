import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';

const HowItWorks = () => {

    
    return (
        <section>
        <div className="container">
            {/* Subtitle */}
            <Subtitle text={'How It works'} align = "justify-center" className='bg-white'/>

            {/* Title */}
            <Title className='max-w-[498px] text-center'>See how it all fits in <span>4 easy steps!</span></Title>

            {/* Description */}
            <Description text={'The tips and tools that teams today need to help their companies succeed.'} align='justify-center' className='max-w-[440px]' />

            {/* Grid */}
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
    );
};

export default HowItWorks;