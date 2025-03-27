import React from 'react';
import { Link } from 'react-router-dom';
import {Title, Description} from '../../components';
// Image
import CtaBg from '/assets/images/global/cta-bg.png';
import AppStore from '/assets/images/global/app-store.png';
import GooglePlay from '/assets/images/global/google-play.png';

const Cta = () => {
    return (
        <section>
            <div className="container">
                <div className="w-full bg-neutral-900 py-20 relative overflow-hidden rounded-2xl">
                    {/* Background Image Section */}
                    <div className="absolute inset-0 md:inset-10 bg-no-repeat bg-bottom bg-contain" style={{ backgroundImage: `url(${CtaBg})` }}></div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 text-center px-4">
                        {/* Title */}
                        <Title className="max-w-[660px] text-white mx-auto">
                            Simple and fun way to see our <span style={{color:'#CAEF7D'}}>growth progress!</span>
                        </Title>
                        
                        {/* Description */}
                        <Description 
                            text="Don't miss out on the excitement! Stay tuned for all the thrilling events we have lined up just for you!" 
                            className="text-white max-w-[540px] mx-auto" 
                        />
                        
                        {/* App Store and Google Play Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            <Link to="https://play.google.com/store">
                                <img src={AppStore} alt="App Store" />
                            </Link>
                            <Link to="https://www.apple.com/app-store">
                                <img src={GooglePlay} alt="Google Play" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
