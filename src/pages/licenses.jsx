import React from 'react';
import Cta from '../components/cta/Cta';
import { Link } from 'react-router-dom';

const licenses = () => {
    return (
        <>
            {/* Image Collection Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                {/* <Title title="Image Collection" size="text-3xl lg:text-4xl" fontWeight="font-medium" textAlign="text-left" /> */}
                                <h2 className='text-slate-900 font-semibold text-3xl lg:text-5xl font-inter'>Photography</h2>

                                <p className="text-gray-600 font-inter font-normal text-lg mt-4">
                                    Images collection from: <Link to="https://lummi.ai" className="text-purple-600 underline" title="Link to Lummi.ai website">lummi.ai</Link>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-geist font-normal text-lg mt-12">
                                    All images used in the UIAppX <Link to="#" className="text-purple-600 underline" title="Link to Fintech SAAS Template"> Fintach aps landing Template </Link> are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Lummi.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            {/* Add alt text for image */}
                            <img className="w-full rounded-xl object-cover" src='/assets/imgs/global/lummi.png' alt="Lummi.ai image collection" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cta */}
            <Cta/>
        </>
    );
};

export default licenses;