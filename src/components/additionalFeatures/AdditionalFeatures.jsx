import React from 'react';
import { Subtitle, Title } from '../index.js';
import Card from './Card.jsx';

// AdditionalFeatures Section Component
// This component displays a grid of feature cards, each highlighting a key CRM feature.
// It uses reusable Subtitle, Title, and Card components for consistency across the theme.

const AdditionalFeatures = () => {

    // Feature list - each feature includes an icon, title, and description.
    // Clients can easily customize or replace this data based on their product/service.
    const features = [
        {
            icon: "/assets/icons/marketing-tools.svg",
            title: "Marketing Tools",
            description: "Create your account and set up your dashboard in minutes"
        },
        {
            icon: "/assets/icons/activity-tracker.svg",
            title: "Activity Tracker",
            description: "Create your account and set up your dashboard in minutes"
        },
        {
            icon: "/assets/icons/reporting-tools.svg",
            title: "Reporting Tools",
            description: "Create your account and set up your dashboard in minutes"
        },
        {
            icon: "/assets/icons/email-features.svg",
            title: "Email Features",
            description: "Create your account and set up your dashboard in minutes"
        },
        {
            icon: "/assets/icons/sales-tracking.svg",
            title: "Sales Tracking",
            description: "Create your account and set up your dashboard in minutes"
        },
        {
            icon: "/assets/icons/collaboration-tools.svg",
            title: "Collaboration Tools",
            description: "Assign tasks, share updates, and communicate seamlessly"
        },
        {
            icon: "/assets/icons/data-storage.svg",
            title: "Data Storage",
            description: "Your data is encrypted and backed up regularly for ultimate security."
        },
        {
            icon: "/assets/icons/mobile-access.svg",
            title: "Mobile Access",
            description: "Stay productive on the go with a responsive mobile app."
        }
    ];

    return (
        <section>
            <div className="container">
                {/* Section Wrapper with white background and rounded corners */}
                <div className="bg-white rounded-3xl px-4 md:px-10 py-12">

                    {/* Reusable Subtitle component */}
                    <Subtitle className='bg-customPurple' text='Additional features' />

                    {/* Section Title */}
                    <Title className='max-w-3xl text-center'>
                        Explore our all comprehensive CRM features.
                    </Title>

                    {/* Features Grid */}
                    {/* Responsive layout: 1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-20">
                        {features?.map((item, index) => (
                            // Each Card displays one feature - reusable and dynamic
                            <Card key={index} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdditionalFeatures;
