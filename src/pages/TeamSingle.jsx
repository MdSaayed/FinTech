import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CiLinkedin } from "react-icons/ci";
import { Faq } from '../components';

const TeamSingle = () => {
    const member = useLoaderData();

    return (
        <>
            {/* Team Content */}
            <section>
                <div className="container">
                    <div className="flex flex-col lg:flex-row bg-white rounded-2xl lg:gap-x-20 gap-y-20 p-8">
                        {/* Image Section (Order First on Mobile, Second on Large Screens) */}
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full md:w-fit mx-auto">
                            <div className='relative'>
                                <img className='w-full md:min-w-96 h-full object-cover rounded-xl' src={member?.image} alt={member.name} />
                                <div className="absolute top-2 right-2 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-purple-600 bg-white p-2">
                                    <Link to={member?.linkedin}>
                                        <CiLinkedin className='text-xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Text Section (Order Second on Mobile, First on Large Screens) */}
                        <div className="col-span-2 order-2 lg:order-1 max-w-96 mx-auto lg:max-w-full">
                            <h1 className='text-5xl text-slate-900 font-medium leading-snug'>{member.name}</h1>

                            {/* Bio */}
                            <p className="text-gray-600 mt-8">
                                {member?.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faq */}
            <Faq/>
         </>
    );
};

export default TeamSingle;
