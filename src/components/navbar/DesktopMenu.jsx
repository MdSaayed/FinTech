import { ChevronDown } from 'lucide-react';
import React from 'react';
import Button from '../button/Button';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const DesktopMenu = ({navItems,isPagesDropdownOpen,setIsPagesDropdownOpen}) => {
    return (
        <div className="hidden lg:flex items-center justify-between w-full py-8">
            <div className='flex items-center lg:gap-16 w-full'>
                <Logo />
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div 
                            key={item.id}
                            className="relative"
                            onMouseEnter={() => item.dropdown && setIsPagesDropdownOpen(true)}
                            onMouseLeave={() => item.dropdown && setIsPagesDropdownOpen(false)}
                        >
                            <Link
                            to={item.link}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2 leading-loose rounded-md text-sm font-medium flex items-center gap-1"
                            >
                            {item.text}
                            {item.dropdown && (
                                <ChevronDown className={`w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                            )}
                            </Link>

                            {item.dropdown && isPagesDropdownOpen && (
                            <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-lg py-2">
                                {item.dropdown.map((subItem) => (
                                <Link
                                    key={subItem.id}
                                    to={subItem.link}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {subItem.text}
                                </Link>
                                ))}
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Button */}
            <div className='w-60 flex justify-end'>
              <Button icon={true} className='w-fit' text="Download in iso" />
            </div>
        </div>
    );
};

export default DesktopMenu;