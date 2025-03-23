import React from 'react';
import Cta from '../components/cta/Cta';
import { Link } from 'react-router-dom';
import Title from '../components/title/Title';

const licenses = () => {
    return (
        <>
            {/* Instructions Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-16">
                    <Title align='justify-start'>Instructions</Title>

                    <p className='text-gray-600 font-normal text-lg max-w-3xl mt-12'>
                        All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
                    </p>
                    
                    {/* List of Instructions */}
                    <div className='mt-8'>
                        <ul className="space-y-4 list-none">
                            <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                Instructions
                            </li>
                            <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                SVG Icons
                            </li>
                            <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                Custom Design & Development
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Illustration Section */}
            <section className='bg-lightGrayishWhite'>
                <div className="container py-24">
                    <h2 className='text-slate-900 font-medium text-3xl lg:text-4xl font-inter'>Illustration of the template</h2>

                    <p className='text-purple-600 font-inter font-normal text-2xl mt-6'>Made by BazPay</p>
                    <div className="mt-10">
                        <img className='w-full rounded-xl' src='/assets/imgs/global/illustration.png' alt="Illustration" />
                    </div>
                </div>
            </section>

            {/* Iconography Section */}
            <section>
                <div className="container py-24">
                    <div className="bg-white rounded-2xl py-12 px-4 md:px-5 lg:px-10">
                        <h2 className='text-slate-900 font-semibold text-3xl lg:text-4xl font-inter'>Iconography</h2>
                        <p className='text-gray-600 font-normal text-lg mt-12'>
                            Iconography was sourced from <Link to='https://tablericons.com/' className='text-purple-600 underline' title="Link to Tabler Icons website"> Tabler icons </Link> Which is available under a CC0 license.
                        </p>

                        <div className="mt-10">
                            {/* Add alt text for image */}
                            <img className='w-full rounded-xl object-cover' src='/assets/imgs/global/tabler.png' alt="Tabler Icons collection" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Collection Section */}
            <section>
                <div className="container py-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white rounded-2xl py-12 px-4 md:px-5 lg:px-10">
                        <div className='flex flex-col justify-between h-full'>
                            <div>
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