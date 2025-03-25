import React from 'react';
import {Title} from '../../components';

/**
 * InstructionsSection - Renders a section with instructions for the template.
 */
const InstructionsSection = () => {
    return (
        <section className='bg-lightGrayishWhite'>
            <div className="container">
                <Title align='justify-start'>Instructions</Title>

                <p className='text-gray-600 font-normal text-lg max-w-3xl mt-12'>
                    All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.
                </p>

                {/* List of Instructions */}
                <div className='mt-8'>
                    <ul className="space-y-4 list-none">
                        <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                            Instructions
                        </li>
                        <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                            SVG Icons
                        </li>
                        <li className="relative text-lg font-normal text-slate-600 before:content-['\2022'] before:absolute before:left-0 before:text-black before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                            Custom Design & Development
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InstructionsSection;
