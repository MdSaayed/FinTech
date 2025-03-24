import React, { useState } from 'react';
import Description from '../description/Description';
import Subtitle from '../subtitle/Subtitle';
import Title from '../title/Title';
import TabItem from './TabItem';

const Advantage = () => {
    const [index, setIndex] = useState(0); // Track the selected tab

    const tabs = [
        {
            image: '/assets/imgs/global/advantage-1.png',
            title: 'Easy finance management',
            description: 'Manage your expenses, budgets, and investments all in one place with an intuitive and user-friendly interface.'
        },
        {
            image: '/assets/imgs/global/advantage-2.png',
            title: 'Secure and reliable',
            description: 'Your financial data is protected with advanced encryption and security measures, giving you peace of mind.'
        },
        {
            image: '/assets/imgs/global/advantage-3.png',
            title: 'Accessible anywhere, anytime',
            description: 'Stay in control of your finances with UIAppX, available on all your devices, whenever you need it.'
        }
    ];    

    return (
        <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle align="justify-center" className="bg-white" text="Our Benefits" />

                {/* Title */}
                <Title className='text-center'>Experience the Advantage</Title>

                {/* Description */}
                <Description 
                    className="max-w-[632px]" 
                    text="Custom-fit strategies designed to meet your unique financial needs and empower your journey toward success" 
                />

                {/* Grid */}
                <div className="grid grid-cols-12 gap-6 mt-16 bg-white rounded-xl p-6 md:p-10">
                    {/* Tab Image */}
                    <div className="flex items-center justify-center col-span-12 xl:col-span-5  px-6  py-16 bg-white rounded-3xl border border-gray-200">
                        <img 
                            src={tabs[index].image} 
                            alt={`Advantage ${index + 1}`} 
                            className="transition-all duration-300 ease-in-out"
                        />
                    </div>

                    {/* Dynamic Tabs */}
                    <div className="col-span-12 xl:col-span-7 space-y-12 md:p-6 bg-white">
                        {tabs.map((tab, i) => (
                            <TabItem 
                                key={i} 
                                number={i + 1} 
                                title={tab.title} 
                                description={tab.description} 
                                active={index === i}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
