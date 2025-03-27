import React from 'react';
import { Link } from 'react-router-dom';
import {SocialLink,ContactInfo,FooterBottom,FooterNav} from "./index";
import Logo from '../../utils/Logo';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-y-16 gap-x-20 text-gray-800">
                    {/* Left Section - Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2">
                            <Logo/>
                        </div>
                        <p className="mt-6 text-base text-gray-700">
                            Got questions? Just hit us up with a click! We're here to help you out with anything you need.
                        </p>
                        
                        {/* Contact Info */}
                        <ContactInfo />

                        {/* Social Links */}
                        <SocialLink />
                       
                    </div>

                    {/* Right Section - Navigation */}
                    <FooterNav />
                </div>

                {/* Bottom Section */}
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
