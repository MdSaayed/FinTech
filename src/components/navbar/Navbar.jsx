import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu'; 

/**
 * Navbar Component
 * 
 * This Component Manages The Navigation Bar, Including Both The Desktop And Mobile Menus.
 * It Handles The State For The Mobile Menu And Dropdowns.
 * 
 * @returns {JSX.Element} The Navbar Component.
 */
const Navbar = () => {
  // State To Manage Mobile Menu Visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State To Manage Pages Dropdown Visibility
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Features', link: '/features' },
    { id: 4, text: 'Pricing', link: '/pricing' },
    { id: 5, text: 'About', link: '/about' },
    { 
      id: 6, 
      text: 'Pages', 
      link: '#',
      dropdown: [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Features', link: '/features' },
        { id: 3, text: 'About', link: '/about' },
        { id: 4, text: 'Blog', link: '/blog' },
        { id: 5, text: 'Blog Single', link: '/blog/1' },
        { id: 6, text: 'Pricing Single', link: '/pricing/1' },
        { id: 7, text: 'Pricing', link: '/pricing' },
        { id: 8, text: 'Contact', link: '/contact' },
        { id: 9, text: 'Success', link: '/success' },
        { id: 10, text: 'Licenses', link: '/licenses' },
        { id: 11, text: 'Privacy & Policy', link: '/privacy-policy' },
        { id: 12, text: 'Terms And Conditions', link: '/terms-and-conditions' },
      ]
    },
  ];

  return (
    <nav className="w-full z-50">
      <div className="container section-padding-0">
      <div class="nav-container max-w-5xl mx-auto">
        {/* Desktop Menu Component */}
        <DesktopMenu 
          navItems={navItems} 
          setIsPagesDropdownOpen={setIsPagesDropdownOpen} 
          isPagesDropdownOpen={isPagesDropdownOpen} 
        />

        {/* Mobile Menu Component */}
        <MobileMenu 
          navItems={navItems} 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          setIsPagesDropdownOpen={setIsPagesDropdownOpen} 
          isPagesDropdownOpen={isPagesDropdownOpen} 
        />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
