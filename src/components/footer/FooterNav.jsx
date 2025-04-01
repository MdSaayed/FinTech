import React from 'react';
import {NavList} from "./index";

const FooterNav = () => {
    // Define Navigation Data For Each Section
    const colOne = [
        { name: 'Home', to: '/' },
        { name: 'Feature', to: '/features' },
        { name: 'About', to: '/about' },
        { name: 'Blog', to: '/blog' },
        { name: 'Pricing', to: '/pricing' }
    ];

    const colTwo = [
        { name: 'Blog Single', to: '/blog/1' },
        { name: 'Pricing Single', to: '/pricing/1' },
        { name: 'Feature Single', to: '/features/1' },
        { name: 'Team Single', to: '/team/1' }
    ];

    const colThree = [
        { name: 'Contact', to: '/contact' },
        { name: 'Privacy Policy', to: '/privacy-policy' },
        { name: 'Licenses', to: '/licenses' },
        { name: 'Terms And Conditions', to: '/terms-and-conditions' }
    ];
    const colFour = [
        { name: '404 Not Found', to: '/404' },
        { name: 'Success', to: '/success' }
    ];

    return (
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 justify-between gap-y-16 md:gap-8 lg:gap-16">
            {/* Main Navigation Section */}
            <div className="col-span-3 md:col-span-3">
                <h4 className="text-2xl text-neutral-900  font-semibold mb-5">Main Page</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-y-16 md:gap-8 lg:gap-16">
                    {/* Use NavList Component For Repeating Sections */}
                    <div>
                        <NavList navItems={colOne} />
                    </div>
                    <div>
                        <NavList navItems={colTwo} />
                    </div>
                    <div>
                        <NavList navItems={colThree} />
                    </div>
                </div>
            </div>

            {/* Utility Pages Section */}
            <div className='col-span-2 lg:col-span-1'>
                <h4 className="text-2xl text-neutral-900  font-semibold mb-5">Utility Page</h4>
                <NavList navItems={colFour} />
            </div>
        </div>
    );
};

export default FooterNav;