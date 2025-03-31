import React from 'react';
import { Link } from 'react-router-dom';
import GooglePlay from "/assets/icons/google-play.svg";   
import AppleStore from "/assets/icons/apple-store.svg";   


const FooterBottom = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-12 pt-6 text-sm text-gray-600">
            <p className="text-center text-base text-gray-700">
                Copyright Designed by <Link to="https://www.uibazar.com" className="text-purple-600 hover:underline  text-base">UiBazar</Link> and Powered by <Link to="https://www.react.com" className="text-purple-600 hover:underline  text-base">React</Link>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="https://play.google.com/store"><img src={GooglePlay} alt="Google Play" className="h-10 w-auto" /></Link>
                <Link to="https://www.apple.com/app-store"><img src={AppleStore} alt="App Store" className="h-10 w-auto" /></Link>
            </div>
        </div>
    );
};

export default FooterBottom;