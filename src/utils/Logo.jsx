import React from 'react';
import { Link } from 'react-router-dom';

 
const Logo = () => {
    return (
         <Link to='/'>
            <img 
                className='w-full h-auto' 
                src='/assets/images/global/logo.svg' 
                alt="Logo"/>
        </Link>
    );
};

export default Logo;