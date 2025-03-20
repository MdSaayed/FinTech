import React from 'react';
import Slider from '../slider/Slider';

const Stats = () => {

    return (
        <section>
            <div className="container">
                <div className="flex flex-wrap justify-between gap-x-4  gap-y-8">
                    <div>
                        <h2 className='max-w-72 text-gray-700 text-xl font-medium leading-normal'>Trusted by fast-growing companies around the world</h2>
                    </div>
                    <div className='flex flex-wrap items-center lg:justify-between gap-6 md:gap-14 2xl:gap-16'>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-1.png" alt="" />
                        </div>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-2.png" alt="" />
                        </div>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-3.png" alt="" />
                        </div>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-4.png" alt="" />
                        </div>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-5.png" alt="" />
                        </div>
                        <div className="">
                            <img className='w-full h-full' src="/assets/imgs/global/logo-6.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
