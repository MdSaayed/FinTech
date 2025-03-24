import React, { useState } from 'react'; // Import React And useState Hook
import { Link } from 'react-router-dom'; // Import Link Component From react-router-dom

import { VideoPopup, Description, Title, Subtitle } from '../../components';

const Testimonials = () => {
    const [showPopup, setShowPopup] = useState(false); // State To Control Popup Visibility

    return (
        <section>
            <div className="container py-24"> {/* Section Wrapper */}
                {/* Subtitle */}
                <Subtitle text={'Testimonials'} align = "justify-center" className='bg-white'/>

                {/* Title */}
                <Title className='max-w-[576px] text-center'>
                    Here's What Our Users Are <span> Chatting About!</span>
                </Title>

                {/* Description */}
                <Description 
                    text={'Our Financial Management Platform Is Transforming Money Management. Here’s What Users Say.'} 
                    align='justify-center' 
                    className='max-w-[490px]' 
                />

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 mt-16">
                    <div className='mx-auto relative'>
                        <img src="/assets/imgs/global/man-with-laptop.png" alt="Man With Laptop" /> {/* Image Of A Man With Laptop */}

                        {/* Play Button */}
                        <div className="flex items-center gap-3 text-white absolute bottom-8 right-5">
                            <span>Customer Stories</span>
                            <img  onClick={() => setShowPopup(true)} className='cursor-pointer' src="/assets/icons/play-button.svg" alt="Play Button" /> {/* Play Button To Trigger Popup */}
                        </div>

                        {/* Showing Popup */}
                        <VideoPopup showPopup={showPopup} onClose={() => setShowPopup(false)} videoLink="https://www.w3schools.com/html/mov_bbb.mp4" /> {/* Video Popup Component */}
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 h-full"> {/* Testimonial Card */}
                        <img className='mb-12' src="/assets/icons/quote.svg" alt="Quote Icon" /> {/* Quote Icon */}

                        <h2 className='text-slate-900 leading-normal font-medium text-2xl font-geist'>
                            "<span className='text-purple-600'>This Finance App Template Is A Game-Changer!</span> It's User-Friendly, Making Budgeting And Financial Tracking A Breeze. It's Incredibly Convenient And Efficient.
                        </h2>

                        <h2 className='text-slate-900 leading-normal font-medium text-2xl font-geist mt-6'>
                            I Highly Recommend It For Anyone Looking To Take Control Of Their Finances."
                        </h2>

                        <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-between mt-16">
                            <div className="flex items-center gap-3">
                                <img src="/assets/imgs/global/avatar.png" alt="Avatar" /> {/* User Avatar */}
                                <div>
                                    <h2 className='text-base font-normal text-slate-900 font-geist'>Jasper Collins</h2>
                                    <p className='text-base font-geist text-gray-700'>@jaspercollins</p> {/* User Name And Handle */}
                                </div>
                            </div>

                            <div>
                                <Link> {/* Link To Wildcrafted Profile */}
                                    <span className='flex rounded-2xl border border-gray-500 p-2'>
                                        <img className='w-full h-full object-cover' src="/assets/imgs/global/wildcrafted.png" alt="Wildcrafted" /> {/* Wildcrafted Image */}
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
