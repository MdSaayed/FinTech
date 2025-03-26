import { div } from 'framer-motion/client';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import Logo from './Logo';
import Humbarger from './Humbarger';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const MobileMenu = ({navItems, isMobileMenuOpen, setIsMobileMenuOpen , setIsPagesDropdownOpen, isPagesDropdownOpen}) => {
    return (
        <div className='block lg:hidden w-full py-6 relative'>
            <div className='flex justify-between items-center'>
                <Logo />
                <Humbarger setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
            </div>
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-20 bg-white w-full h-screen z-50`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <div key={item.id}>
                        <Link
                            to={item.link}
                            onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            <div className="flex justify-between items-center">
                            {item.text}
                            {item.dropdown && (
                                <button 
                                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                                className="p-1"
                                >
                                <ChevronDown className={`w-5 h-5 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                            )}
                            </div>
                        </Link>

                        {item.dropdown && isPagesDropdownOpen && (
                            <div className="ml-4 space-y-2">
                                {item.dropdown.map((subItem) => (
                                    <Link
                                        key={subItem.id}
                                        to={subItem.link}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm"
                                        >
                                        {subItem.text}
                                    </Link>
                                ))}
                            </div>
                        )}
                        </div>
                    ))}
                    
                    {/* Button */}
                    <div  style={{marginTop:'20px'}}>
                        <Button text='Download in iso'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;