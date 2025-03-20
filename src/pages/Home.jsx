import React from 'react';
import Title from './../components/title/Title';
import Description from './../components/description/Description';
import HeroImg from '/assets/imgs/hero/home-hero.png';
import { FaApple } from "react-icons/fa";
import Button from '../components/button/Button';
import Subtitle from '../components/subtitle/Subtitle';
import Stats from '../components/stats/Stats';


const Home = () => {
    return (
       <>
         <section>
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center px-5 lg:px-10 gap-y-20 py-12 bg-white rounded-xl">
                    <div className='lg:pr-20'>
                        {/* Subtitle */}
                        <Subtitle text="AI Update for January 2025"  />

                        {/* Title */}
                        <div class="mb-6">
                            <Title> Your go-to app for mastering your <span> Finances</span> </Title>
                        </div>
                        
                        {/* Description */}
                        <Description text="Managing your business finances is easier with our user-friendly SaaS platform designed for U.S. companies!" />

                        {/* Buttons */}
                        <div className="flex gap-6 flex-wrap mt-12">
                            <Button text="Get Started for Free" to='' icon={true} iconComponent={<FaApple />} />
                            <Button text="Get Started for Free" to='' icon={true} iconComponent={<FaApple />} variant="secondary" />
 
                        </div>
                    </div>
                    <div>
                        <img className='mx-auto' src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
         </section>

         {/* Stats */}
         <Stats />
       </>
    );
};

export default Home;