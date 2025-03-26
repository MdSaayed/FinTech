import { ChevronDown } from 'lucide-react';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Humbarger from './Humbarger';
import { FaApple } from "react-icons/fa";
import Button from '../button/Button';
import { Link, useLocation } from 'react-router-dom';

/**
 * MobileMenu Component
 * This component renders the mobile navigation menu with logo, hamburger button, navigation items, dropdowns, and a button.
 * The menu is displayed when the mobile menu is toggled, and it supports hover effects for dropdown menus.
 * 
 * @param {Object[]} navItems - Array of navigation items to be displayed.
 * @param {boolean} isMobileMenuOpen - State to track whether the mobile menu is open.
 * @param {Function} setIsMobileMenuOpen - Function to toggle the mobile menu open state.
 * @param {boolean} isPagesDropdownOpen - State to track whether the pages dropdown is open.
 * @param {Function} setIsPagesDropdownOpen - Function to set the pages dropdown open state.
 * @returns {JSX.Element}
 */
const MobileMenu = ({ navItems, isMobileMenuOpen, setIsMobileMenuOpen, setIsPagesDropdownOpen, isPagesDropdownOpen }) => {
    const location = useLocation(); // Get the current location

    // Effect to prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when menu is closed
        }

        // Cleanup on unmount or when the state changes
        return () => {
            document.body.style.overflow = 'auto'; // Ensure scrolling is enabled on cleanup
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="block lg:hidden w-full py-6 relative">
    <div className="flex justify-between items-center">
        <Logo />
        <Humbarger setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
    </div>

    {/* Mobile Menu (Full Screen + Scrollable) */}
    <div className={`${isMobileMenuOpen ? "flex" : "hidden"} 
        fixed top-0 left-0 w-full h-screen bg-white 
        flex-col z-40 shadow-lg overflow-hidden`}>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-2 pt-4 pb-6 sm:px-3 font-geist">
            {navItems.map((item, idx) => {
                const isActive = location.pathname === item.link;
                return (
                    <div key={idx}>
                        <Link
                            to={item.link}
                            onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                            className={`text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium 
                                ${isActive ? "text-purple-600" : ""}`}
                        >
                            <div className="flex justify-between items-center">
                                {item.text}
                                {item.dropdown && (
                                    <button
                                        onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                                        className="p-1"
                                    >
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform ${
                                                isPagesDropdownOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                )}
                            </div>
                        </Link>

                        {/* Dropdown Menu */}
                        {item?.dropdown && isPagesDropdownOpen && (
                            <div className="ml-4 space-y-2">
                                {item.dropdown.map((subItem, idx) => {
                                    const isSubItemActive = location.pathname === subItem.link;
                                    return (
                                        <Link
                                            key={idx}
                                            to={subItem.link}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-3 py-2 text-gray-600 hover:bg-gray-100 
                                                rounded-md text-sm ${isSubItemActive ? "text-purple-600" : ""}`}
                                        >
                                            {subItem?.text}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>

        {/* Fixed Button at Bottom */}
        <div className="p-4 border-t">
            <Button to="https://apps.apple.com" icon={true} iconComponent={<FaApple />} text="Download in iOS" />
        </div>
    </div>
</div>

    );
};

// Prop validation
MobileMenu.propTypes = {
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
    isMobileMenuOpen: PropTypes.bool.isRequired,
    setIsMobileMenuOpen: PropTypes.func.isRequired,
    isPagesDropdownOpen: PropTypes.bool.isRequired,
    setIsPagesDropdownOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
