import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-y-16 gap-x-20 text-gray-800">
                    {/* Left Section - Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2">
                            <Link to={'/'}>
                                <img src="/assets/imgs/global/logo.svg" alt="UIAppX Logo" className="h-8" />
                            </Link>
                        </div>
                        <p className="mt-6 text-base text-gray-700">
                            Got questions? Just hit us up with a click! We're here to help you out with anything you need.
                        </p>
                        
                        <div className="my-6 space-y-4 text-sm">
                            <p className="text-base text-gray-700 font-medium">Contact:</p>
                            <p className="text-gray-600"><strong>Email:</strong> support@uiappX.com</p>
                            <p className="text-gray-600"><strong>Phone:</strong> 123-456-7890</p>
                            <p className="text-gray-600"><strong>Address:</strong> 123 Finance St., New York, NY 10001</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-3 mt-4">
                            <Link to="#" className="p-2 bg-gray-100 rounded-full text-purple-600 hover:text-white hover:bg-slate-900 transition-colors duration-300">
                                <FaInstagram />
                            </Link>
                            <Link to="#" className="p-2 bg-gray-100 rounded-full text-purple-600 hover:text-white hover:bg-slate-900 transition-colors duration-300">
                                <FaXTwitter />
                            </Link>
                            <Link to="#" className="p-2 bg-gray-100 rounded-full text-purple-600 hover:text-white hover:bg-slate-900 transition-colors duration-300">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Navigation */}
                    <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 grid lg:grid-cols-3 xl:grid-cols-4 justify-between gap-y-16 md:gap-8 lg:gap-16">
                        <div className="col-span-3 md:col-span-3">
                            <h4 className="text-2xl text-neutral-900 font-geist font-semibold mb-5">Main Page</h4>

                            <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-y-16 md:gap-8 lg:gap-16">
                                <div>
                                    <ul className="space-y-2 text-sm">
                                        <li><Link to="/" className="hover:underline font-geist text-base text-gray-700">Home</Link></li>
                                        <li><Link to="/features" className="hover:underline font-geist text-base text-gray-700">Feature</Link></li>
                                        <li><Link to="/about" className="hover:underline font-geist text-base text-gray-700">About</Link></li>
                                        <li><Link to="/blog" className="hover:underline font-geist text-base text-gray-700">Blog</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2 text-sm">
                                        <li><Link to="/blog-details" className="hover:underline font-geist text-base text-gray-700">Blog Details</Link></li>
                                        <li><Link to="/pricing" className="hover:underline font-geist text-base text-gray-700">Pricing</Link></li>
                                        <li><Link to="/pricing-details" className="hover:underline font-geist text-base text-gray-700">Pricing Details</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2 text-sm">
                                        <li><Link to="/contact" className="hover:underline font-geist text-base text-gray-700">Contact</Link></li>
                                        <li><Link to="/privacy-policy" className="hover:underline font-geist text-base text-gray-700">Privacy Policy</Link></li>
                                        <li><Link to="/licenses" className="hover:underline font-geist text-base text-gray-700">Licenses</Link></li>
                                        <li><Link to="/terms" className="hover:underline font-geist text-base text-gray-700">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-2 lg:col-span-1'>
                            <h4 className="text-2xl text-neutral-900 font-geist font-semibold mb-5">Utility Page</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/404" className="hover:underline font-geist text-base text-gray-700">404 Not Found</Link></li>
                                <li><Link to="/faq" className="hover:underline font-geist text-base text-gray-700">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-12 pt-6 text-sm text-gray-600">
                    <p className="text-center text-base text-gray-700">
                        Copyright Designed by <Link to="https://www.uibazar.com" className="text-purple-600 hover:underline font-geist text-base">UiBazar</Link> and Powered by <Link to="#" className="text-purple-600 hover:underline font-geist text-base">React</Link>
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="https://play.google.com/store"><img src="/assets/icons/google-play.svg" alt="Google Play" className="h-10 w-auto" /></Link>
                        <Link to="https://www.apple.com/app-store"><img src="/assets/icons/apple-store.svg" alt="App Store" className="h-10 w-auto" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
