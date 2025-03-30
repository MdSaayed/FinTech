import React, { useState } from 'react'; // Import React and useState Hook
import {Description ,Subtitle ,Title ,  TabItem} from '../../components';

// Import Images Directly
import advantage1 from '/assets/images/global/advantage-1.png'; 
import advantage2 from '/assets/images/global/advantage-2.png';
import advantage3 from '/assets/images/global/advantage-3.png';

const Advantage = () => {
    const [index, setIndex] = useState(0); // Track Selected Tab

    // Tabs Data  
    const tabs = [
        {
            image: advantage1,  
            title: 'Easy Finance Management',
            description: 'Manage Your Expenses, Budgets, And Investments All In One Place With An Intuitive And User-Friendly Interface.'
        },
        {
            image: advantage2,  
            title: 'Secure And Reliable',
            description: 'Your Financial Data Is Protected With Advanced Encryption And Security Measures, Giving You Peace Of Mind.'
        },
        {
            image: advantage3, 
            title: 'Accessible Anywhere, Anytime',
            description: 'Stay In Control Of Your Finances With UIAppX, Available On All Your Devices, Whenever You Need It.'
        }
    ];

    return (
        <section>
            <div className="container">
                {/* Subtitle For The Section */}
                <Subtitle align="justify-center" className="bg-white" text="Our Benefits" />

                {/* Title For The Section */}
                <Title className='text-center'>Experience The Advantage</Title>

                {/* Description For The Section */}
                <Description 
                    className="max-w-[632px]" 
                    text="Custom-Fit Strategies Designed To Meet Your Unique Financial Needs And Empower Your Journey Toward Success" 
                />

                {/* Grid Layout For Tab Items */}
                <div className="grid grid-cols-12 gap-6 mt-16 bg-white rounded-xl p-6 md:p-10">
                    {/* Tab Image Section */}
                    <div className="flex items-center justify-center col-span-12 xl:col-span-5 px-6 py-8 lg:py-16 bg-white rounded-3xl border border-gray-200">
                        {/* Display Active Tab Image */}
                        <img 
                            src={tabs[index].image} 
                            alt={`Advantage ${index + 1}`} 
                            className="transition-all duration-300 ease-in-out  w-full lg:max-w-lg max-h-[420px]"
                        />
                    </div>

                    {/* Dynamic Tabs Section */}
                    <div className="col-span-12 xl:col-span-7 space-y-12 md:p-6 bg-white">
                        {/* Map Over Tabs To Display Each TabItem */}
                        {tabs?.map((tab, i) => (
                            <TabItem 
                                key={i} 
                                number={i + 1} // Tab Number
                                title={tab.title} // Tab Title
                                description={tab.description} // Tab Description
                                active={index === i} // Check If This Tab Is Active
                                onClick={() => setIndex(i)} // Set Active Tab Index On Click
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
