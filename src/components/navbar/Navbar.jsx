import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Features', link: '/features' },
    { id: 2, text: 'Blog', link: '/blog' },
    { id: 3, text: 'Pricing', link: '/pricing' },
    { id: 4, text: 'About', link: '/about' },
    { 
      id: 5, 
      text: 'Pages', 
      link: '#',
      dropdown: [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'About Us', link: '/about' },
        { id: 3, text: 'Pricing', link: '/pricing' },
        { id: 4, text: 'Contact', link: '/contact' },
      ]
    },
  ];

  return (
    <nav className="  w-full z-50">
      <div className="container section-padding-0">
          {/* Desktop Menu */}
          <DesktopMenu navItems={navItems} setIsPagesDropdownOpen={setIsPagesDropdownOpen} isPagesDropdownOpen={isPagesDropdownOpen} />

          {/* Mobile Menu */}
          <MobileMenu navItems={navItems} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}   setIsPagesDropdownOpen={setIsPagesDropdownOpen} isPagesDropdownOpen={isPagesDropdownOpen} />
      </div>
    </nav>
  );
};

export default Navbar;