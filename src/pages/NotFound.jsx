import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

// Importing the error image via import method for better performance and bundle optimization
import errorImage from '/assets/images/global/error-image.png';

/**
 * NotFound Component - This page is shown when the user navigates to a route that doesn't exist.
 */
const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Error Image: The 404 error image that is shown to the user */}
                    <img 
                        className="mb-8 max-w-full h-auto" 
                        src={errorImage} 
                        alt="404 Error" 
                    />

                    {/* Back to Homepage Button: Redirects the user to the homepage */}
                    <Button 
                        className="bg-purple-600 hover:bg-transparent border hover:border-purple-600 hover:text-purple-600 transition-all duration-300 mt-8" 
                        text="Back To Homepage"
                        to="/"
                    />
                </div>
            </div>
        </section>
    );
};

export default NotFound;
