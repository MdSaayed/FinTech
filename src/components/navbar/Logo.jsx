import React from 'react';
import LogoSvg from "/assets/images/global/logo.svg";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
         <Link to='/'>
            <img className='w-full h-auto' src={LogoSvg} alt="Logo"/>
        </Link>
    );
};

export default Logo;