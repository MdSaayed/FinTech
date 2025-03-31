import React from 'react';
import HeroImg from '/assets/images/hero/home-hero.png';
import { FaApple } from "react-icons/fa";
import { Title, Description, Button, Subtitle } from '../../components';

const HomeHero = () => {
    return (
        <section>
            <div className="container padding-y-0">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center px-5 lg:px-10 gap-y-20 py-12 bg-white rounded-xl">
                    <div className='lg:pr-20'>
                        {/* Subtitle */}
                        <Subtitle label='New' align='justify-center md:justify-start' className='bg-customPurple' text="AI Update for January 2025"  />

                        {/* Title */}
                        <div className="mb-6">
                            <Title size='text-[2.5rem] lg:text-7xl' align='justify-center md:justify-start' className='max-w-xl text-center md:text-left'> Your go-to app for mastering your <span> Finances</span> </Title>
                        </div>
                        
                        {/* Description */}
                        <Description text="Managing your business finances is easier with our user-friendly SaaS platform designed for U.S. companies!" align='justify-center md:justify-start' className='text-center md:text-left max-w-2xl' />

                        {/* Buttons */}
                        <div className="flex gap-6 justify-center md:justify-start flex-col md:flex-row flex-wrap mt-12">
                            <Button text="Get Started for Free" to='' icon={false} />
                            <Button text="Get Started for Free" to='' icon={true} iconComponent={<FaApple />} variant="secondary" />
                        </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;