import React from 'react';

// Import Brand Logo Images From The Assets Folder
import logo1 from '/assets/imgs/global/logo-1.png';
import logo2 from '/assets/imgs/global/logo-2.png';
import logo3 from '/assets/imgs/global/logo-3.png';
import logo4 from '/assets/imgs/global/logo-4.png';
import logo5 from '/assets/imgs/global/logo-5.png';
import logo6 from '/assets/imgs/global/logo-6.png';

const Brands = () => {
    // Store All Brand Logos In An Array For Easy Mapping
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <section>
            <div className="container">
                {/* Flexbox Container For Layout Adjustment */}
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-8">
                    
                    {/* Left Side: Section Heading */}
                    <div>
                        <h2 className='max-w-72 text-gray-700 text-xl font-medium leading-normal'>
                            Trusted By Fast-Growing Companies Around The World
                        </h2>
                    </div>

                    {/* Right Side: Logos Of Companies */}
                    <div className='flex flex-wrap items-center lg:justify-between gap-6 md:gap-14 2xl:gap-16'>
                        {logos.map((logo, index) => (
                            <div key={index}>
                                {/* Display Brand Logos Dynamically */}
                                <img className='w-full h-full' src={logo} alt={`Brand Logo ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Brands;
