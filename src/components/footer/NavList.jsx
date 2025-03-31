import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Component For Rendering Navigation Links
 * @param {Array} navItems - An array of navigation items with `name` and `to` properties.
 */
const NavList = ({ navItems }) => {
    return (
        <ul className="space-y-2 text-sm">
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link to={item.to} className="hover:underline  text-base text-gray-700">
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
