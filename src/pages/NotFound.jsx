import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center">
                    <img 
                        className='mb-8 max-w-full h-auto' 
                        src="/assets/imgs/global/error-image.png" 
                        alt="404 Error" 
                    />

                    <Button 
                        className='bg-purple-600 hover:bg-transparent border hover:border-purple-600 hover:text-purple-600 transition-all duration-300 mt-8' 
                        text='Back to Homepage'
                        to='/'
                    />
                </div>
            </div>
        </section>
    );
};

export default NotFound;