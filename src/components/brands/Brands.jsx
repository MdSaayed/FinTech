import React from 'react';
import {LogoCard} from "../../components";

// Import brand logo images from the assets folder
import logo1 from '/assets/images/global/logo-1.png';
import logo2 from '/assets/images/global/logo-2.png';
import logo3 from '/assets/images/global/logo-3.png';
import logo4 from '/assets/images/global/logo-4.png';
import logo5 from '/assets/images/global/logo-5.png';
import logo6 from '/assets/images/global/logo-6.png';

/**
 * Brands Component
 * This component displays a list of trusted brands/logos that are used by fast-growing companies.
 * The logos are mapped from an array and displayed in a flexible layout.
 * 
 * @returns {JSX.Element} The rendered Brands component.
 */
const Brands = () => {
    // Store all brand logos in an array for easy mapping
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <section>
            <div className="container">
                {/* Flexbox layout to align the section content */}
                <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between gap-x-10 gap-y-8">
                    
                    {/* Section Heading: Describe the trust factor */}
                    <div>
                        <h2 className='max-w-72 text-center md:text-left text-gray-700 text-xl font-medium leading-normal'>
                            Trusted By Fast-Growing Companies Around The World
                        </h2>
                    </div>

                    {/* Brand Logos: Display logos in a responsive grid layout */}
                    <div className='flex flex-wrap items-center justify-center lg:justify-between gap-x-6 md:gap-x-16 gap-y-6'>
                        {/* Dynamically render logos by mapping over the logos array */}
                        {logos.map((logo, index) => (
                            <LogoCard key={index} logo={logo} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Brands;
