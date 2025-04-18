import React from 'react';
import Title from '../components/title/Title';
import {TermsList} from "../components/utility-components";

const PrivacyPolicy = () => {

    // Terms 
    const termsData = [
        "Information We Collect 1.1 Personal Information - Name, email address, phone number - Date of birth, government-issued ID - Bank account or credit card details 1.2 Usage Information - IP address, browser type, device information - Pages visited, time spent on the platform - Trading history and preferences",
        "How We Use Your Information 2.1 To provide and maintain our services 2.2 To process transactions and send transaction notifications 2.3 To comply with legal and regulatory requirements 2.4 To improve our platform and user experience 2.5 To communicate with you about our services and updates",
        "Information Sharing and Disclosure 3.1 With service providers and partners 3.2 In response to legal requests or to prevent harm 3.3 In the event of a merger, sale, or asset transfer 3.4 With your consent",
        "Data Security 4.1 Implementation of industry-standard security measures 4.2 Regular security audits and updates 4.3 Employee training on data protection",
        "Your Rights and Choices 5.1 Access to your personal information 5.2 Correction of inaccurate or incomplete data 5.3 Deletion of your data (subject to legal requirements) 5.4 Opting out of marketing communications",
        "Cookies and Tracking Technologies 6.1 Types of cookies we use 6.2 How to manage cookie preferences 6.3 Third-party analytics and advertising",
        "International Data Transfers 7.1 Data storage locations 7.2 Safeguards for international transfers",
        "Children's Privacy 8.1 Age restrictions for platform use 8.2 Deletion of information collected from minors",
        "Changes to This Privacy Policy 9.1 Notification of significant changes 9.2 Effective date of updates",
        "Data Retention 11.1 Duration of data storage 11.2 Criteria for determining retention periods",
        "Third-Party Links 12.1 Disclaimer for external websites 12.2 Recommendation to review third-party privacy policies",
        "Do Not Track Signals 13.1 Our response to browser 'Do Not Track' signals",
        "California Privacy Rights 14.1 Rights under the California Consumer Privacy Act (CCPA) 14.2 How to exercise these rights",
        "GDPR Compliance (for EU users) 15.1 Legal basis for processing personal data 15.2 Data Protection Officer contact information"
    ];
    

    return (
         // Main section for Privacy Policy
        <section className='bg-lightGrayishWhite'>
            <div className="container -mt-16 lg:mt-0">
                {/* Container with a light lavender background for the main content */}
                <div className='mx-auto bg-white py-12 md:py-24 px-4 md:px-10 max-w-6xl rounded-2xl'>
                    {/* Privacy Policy Title */}
                    <Title align='justify-start'>Privacy <span>Policy</span></Title>
                    
                    {/* Privacy Policy Introduction Description */}
                    <p className='font-inter text-gray-600 text-lg mt-4'>
                        At UIAppX, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                    </p>

                    {/* Privacy Policy List of Sections */}
                     <TermsList items={termsData} />

                    {/* Last Update Date */}
                        <div className='mt-12'>
                            <p className=' text-base font-normal text-gray-600'>Last update: 25 March, 2025</p>
                        </div>

                    {/* Disclaimer Note */}
                        <div className='mt-12'>
                            <p className=' text-base font-normal text-gray-600'><strong>Note:</strong> This privacy policy should be customized to accurately reflect UIAppX specific data practices and comply with all applicable laws and regulations in the jurisdictions where UIAppX operates.</p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;