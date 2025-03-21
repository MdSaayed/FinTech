import React from 'react';
import Title from '../title/Title';
import Description from '../description/Description';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <section className="">
            <div className="container ">
                <div className="w-full bg-neutral-900 py-20 relative overflow-hidden rounded-2xl">
                {/* Background Elements */}
                <div className="absolute inset-0 md:inset-10 bg-[url('/assets/imgs/global/cta-bg.png')] bg-no-repeat bg-bottom bg-contain"></div>

                {/* Content Wrapper */}
                <div className="relative z-10 text-center px-4">
                    <Title className="max-w-[660px] text-white mx-auto">
                        Simple and fun way to see our <span className="text-[#CAEF7D]">growth progress!</span>
                    </Title>
                    <Description text="Don't miss out on the excitement! Stay tuned for all the thrilling events we have lined up just for you!" className="text-white max-w-[540px] mx-auto" />
                    
                    {/* App Store Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <Link to=""><img src="/assets/imgs/global/app-store.png" alt="App Store" /></Link>
                        <Link to=""><img src="/assets/imgs/global/google-play.png" alt="Google Play" /></Link>
                    </div>
                                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
