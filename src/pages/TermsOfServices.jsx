import React from 'react';
import Title from '../components/title/Title';

const TermsOfServices = () => {
    return (
        <section>
            {/* Container for the content */}
            <div className="container py-10 lg:py-20">
                {/* Main content box with padding and rounded corners */}
                <div className='bg-white max-w-6xl mx-auto bg-lightLavender py-12 md:py-24 px-4 md:px-10 rounded-3xl'>
                    
                    {/* Title section */}
                    <Title align='justify-start'>Terms of <span>Services</span></Title>
                    
                    {/* Description */}
                    <p className='font-inter text-gray-600 text-lg mt-4'>
                        At UIAppX, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                    </p>

                    {/* Section for Acceptance of Terms */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>1. Acceptance of Terms</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            By accessing or using Bazpay website, services, or products (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                        </p>
                    </div>

                    {/* Section for Description of Services */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>2. Description of Services</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            Bazpay is a digital agency providing web design, development, marketing, and related digital services. The specific services we offer may change over time.
                        </p>
                    </div>

                    {/* Section for User Responsibilities */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>3. User Responsibilities</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            You agree to use our Services only for lawful purposes and in accordance with these Terms. You shall not:
                        </p>
                    </div>

                    {/* List of User Responsibilities */}
                    <div className='mt-12'>
                        <ul className="list-none">
                            <li className="font-geist relative text-base font-normal text-gray-600 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Use the Services in any way that violates applicable laws or regulations.
                            </li>
                            <li className="font-geist relative text-base font-normal text-gray-600 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Attempt to gain unauthorized access to any part of the Services.
                            </li>
                            <li className="font-geist relative text-base font-normal text-gray-600 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Interfere with or disrupt the integrity or performance of the Services.
                            </li>
                            <li className="font-geist relative text-base font-normal text-gray-600 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                                Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without express written permission from Bazpay.
                            </li>
                        </ul>
                    </div>

                    {/* Section for Intellectual Property */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>4. Intellectual Property</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            All content, features, and functionality of our Services are owned by Bazpay or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                        </p>
                    </div>

                    {/* Section for Payment and Billing */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>5. Payment and Billing</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            For paid Services, you agree to pay all fees associated with the Services you select. All fees are non-refundable unless otherwise specified.
                        </p>
                    </div>

                    {/* Section for Termination */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>6. Termination</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            We reserve the right to terminate or suspend your access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>    
                    </div>

                    {/* Section for Governing Law */}
                    <div className="space-y-4 mt-12">
                        <h3 className='text-slate-800 font-semibold text-2xl text-geist'>7. Governing Law</h3>
                        <p className='leading-normal mt-4 text-gray-700 text-base text-left'>
                            These Terms shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction], without regard to its conflict of law provisions.
                        </p>
                    </div>

                    {/* Acknowledgment of the terms */}
                    <div className='mt-12'>
                        <p className='text-base font-normal text-gray-600'>
                            UIAppX By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfServices;