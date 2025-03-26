import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLink = () => {
    return (
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
    );
};

export default SocialLink;