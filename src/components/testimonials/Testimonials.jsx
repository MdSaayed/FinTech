import React from 'react';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import Description from '../description/Description';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    return (
        <section>
            <div className="container py-24">
                {/* Subtitle */}
                <Subtitle text={'Testimonials'} align = "justify-center" className='bg-white'/>

                {/* Title */}
                <Title className='max-w-[576px] text-center'>Here's what our users are <span> chatting about!</span></Title>

                {/* Description */}
                <Description text={'Our financial management platform is transforming money management. Here’s what users say.'} align='justify-center' className='max-w-[490px]' />

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 mt-16">
                    <div className='mx-auto relative'>
                        <img src="/assets/imgs/global/man-with-laptop.png" alt="Man With Laptop" />

                        {/* Play Button */}
                        <div className="flex items-center gap-3 text-white absolute bottom-8 right-5">
                            <span>Customer Stories</span>
                            <img className='cursor-pointer' src="/assets/icons/play-button.svg" alt="" />
                        </div>
                    </div>
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 h-full">
                        <img className='mb-12' src="/assets/icons/quote.svg" alt="" />

                        <h2 className='text-slate-900 leading-normal font-medium text-2xl font-geist'>"<span className='text-purple-600'>This finance app template is a game-changer!</span> It's user-friendly, making budgeting and financial tracking a breeze. It's incredibly convenient and efficient. </h2>

                        <h2 className='text-slate-900 leading-normal font-medium text-2xl font-geist mt-6'>I highly recommend it for anyone looking to take control of their finances."</h2>

                        <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-between mt-16">
                            <div className="flex items-center gap-3">
                                <img src="/assets/imgs/global/avatar.png" alt=""/>
                                <div>
                                    <h2 className='text-base font-normal text-slate-900 font-geist'>Jasper Collins</h2>
                                    <p className='text-base font-geist text-gray-700'>@jaspercollins</p>
                                </div>
                            </div>
                            <div>
                                <Link>
                                    <span className='flex rounded-2xl border border-gray-500 p-2'>
                                        <img className='w-full h-full object-cover' src="/assets/imgs/global/wildcrafted.png" alt="Wildcrafted"/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonials;