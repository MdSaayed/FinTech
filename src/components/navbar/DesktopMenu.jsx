import { ChevronDown } from 'lucide-react';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Logo from './Logo';
import { FaApple } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

/**
 * DesktopMenu Component
 * This component renders the desktop navigation menu with logo, navigation items, dropdowns, and a button.
 * It supports hover effects for dropdown menus and allows marking the active menu with a different color.
 * 
 * @param {Object[]} navItems - Array of navigation items to be displayed.
 * @param {boolean} isPagesDropdownOpen - State to track whether dropdown menu is open.
 * @param {Function} setIsPagesDropdownOpen - Function to set the dropdown open state.
 * @returns {JSX.Element}
 */
const DesktopMenu = ({ navItems, isPagesDropdownOpen, setIsPagesDropdownOpen }) => {
    const location = useLocation(); // Get the current location

    return (
        <div className="hidden lg:flex items-center justify-between w-full py-8">
            <div className='flex items-center lg:gap-16 w-full'>
                <Logo />
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.link; // Check if the current page matches the link
                        return (
                            <div
                                key={item.id}
                                className="relative font-geist z-40"
                                onMouseEnter={() => item.dropdown && setIsPagesDropdownOpen(true)}
                                onMouseLeave={() => item.dropdown && setIsPagesDropdownOpen(false)}
                            >
                                <Link
                                    to={item.link}
                                    className={`text-gray-700 hover:text-purple-600 px-3 py-2 leading-loose rounded-md text-sm font-medium flex items-center gap-1 ${isActive ? 'text-purple-600' : ''}`}
                                >
                                    {item.text}
                                    {item.dropdown && (
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {item.dropdown && isPagesDropdownOpen && (
                                    <div className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-lg py-2">
                                        {item.dropdown.map((subItem) => {
                                            const isSubItemActive = location.pathname === subItem.link; // Check if the subItem's link matches the current path
                                            return (
                                                <Link
                                                    key={subItem.id}
                                                    to={subItem.link}
                                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isSubItemActive ? 'text-purple-600' : ''}`}
                                                >
                                                    {subItem.text}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Button */}
            <div className='w-60 flex justify-end'>
                <Button to="https://apps.apple.com" icon={true} iconComponent={<FaApple />} className='w-fit' text="Download in iso" />
            </div>
        </div>
    );
};

// Prop validation
DesktopMenu.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            dropdown: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired
                })
            )
        })
    ).isRequired,
    isPagesDropdownOpen: PropTypes.bool.isRequired,
    setIsPagesDropdownOpen: PropTypes.func.isRequired,
};

export default DesktopMenu;
