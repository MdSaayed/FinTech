import React from 'react';
import Slider from '../components/slider/Slider';
import { Subtitle, Title } from '../components';

const Integrations = () => {
    const logos = [
        '/assets/images/global/integration-1.png',
        '/assets/images/global/integration-2.png',
        '/assets/images/global/integration-3.png',
        '/assets/images/global/integration-4.png',
        '/assets/images/global/integration-6.png',
        '/assets/images/global/integration-6.png',
        '/assets/images/global/integration-7.png',
        '/assets/images/global/integration-9.png',
        '/assets/images/global/integration-10.png',
        '/assets/images/global/integration-11.png',
        '/assets/images/global/integration-12.png',
        '/assets/images/global/integration-13.png',
        '/assets/images/global/integration-14.png',
        '/assets/images/global/integration-15.png',
        '/assets/images/global/integration-16.png',
        '/assets/images/global/integration-17.png',
        '/assets/images/global/integration-18.png'
    ]
    return (
        <section className='overflow-hidden'>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text='Integrations' />

                {/* Title */}
                <Title className='max-w-[580px]'>Seamless integrations with your favorite <span>tools</span></Title>
                
                <div className='brand-area max-w-5xl mx-auto mt-10 lg:mt-16'>
                    {/* Slider One */}
                    <div className='mb-10'>
                        <Slider items={logos} slidesPerViewMobile={5} slidesPerViewTablet={7} slidesPerViewDesktop={9} spaceBetween={20} reverseDirection={false} />
                    </div>

                    {/* Slider Two */}
                    <div>
                        <Slider reverseDirection={true} items={logos} slidesPerViewMobile={5} slidesPerViewTablet={7} slidesPerViewDesktop={9} spaceBetween={20} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;