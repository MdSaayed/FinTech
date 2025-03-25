import React from 'react';
import Title from '../components/title/Title';
 

import {TermsSection, TermsList} from "../components/utility-components"

/** 
 * TermsOfServices Page 
 * ThemeForest Standard With Reusable Components
 */
const TermsOfServices = () => {
    return (
        <section>
            {/* Container For The Content */}
            <div className="container py-10 lg:py-20">
                {/* Main Content Box With Padding And Rounded Corners */}
                <div className='bg-white max-w-6xl mx-auto bg-lightLavender py-12 md:py-24 px-4 md:px-10 rounded-3xl'>
                    
                    {/* Title Section */}
                    <Title align='justify-start'>Terms of <span>Services</span></Title>
                    
                    {/* Description */}
                    <p className='font-inter text-gray-600 text-lg mt-4'>
                        At UIAppX, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                    </p>

                    {/* Terms Sections Using Reusable Component */}
                    <TermsSection title="1. Acceptance of Terms" content="By accessing or using Bazpay website, services, or products, you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services." />
                    <TermsSection title="2. Description of Services" content="Bazpay is a digital agency providing web design, development, marketing, and related digital services. The specific services we offer may change over time." />
                    <TermsSection title="3. User Responsibilities" content="You agree to use our Services only for lawful purposes and in accordance with these Terms. You shall not:" />

                    {/* List Of User Responsibilities */}
                    <TermsList 
                        items={[
                            "Use the Services in any way that violates applicable laws or regulations.",
                            "Attempt to gain unauthorized access to any part of the Services.",
                            "Interfere with or disrupt the integrity or performance of the Services.",
                            "Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without express written permission from Bazpay."
                        ]}
                    />

                    {/* More Terms Sections */}
                    <TermsSection title="4. Intellectual Property" content="All content, features, and functionality of our Services are owned by Bazpay or its licensors and are protected by copyright, trademark, and other intellectual property laws." />
                    <TermsSection title="5. Payment and Billing" content="For paid Services, you agree to pay all fees associated with the Services you select. All fees are non-refundable unless otherwise specified." />
                    <TermsSection title="6. Termination" content="We reserve the right to terminate or suspend your access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms." />
                    <TermsSection title="7. Governing Law" content="These Terms shall be governed by and construed in accordance with the laws of [insert applicable jurisdiction], without regard to its conflict of law provisions." />

                    {/* Acknowledgment Of The Terms */}
                    <div className='mt-12'>
                        <p className='text-base font-normal text-gray-600'>
                            UIAppX - By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfServices;
