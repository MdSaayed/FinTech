import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Humbarger = ({setIsMobileMenuOpen, isMobileMenuOpen}) => {
    return (
        <div className="flex items-center">
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
                >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
    );
};

export default Humbarger;