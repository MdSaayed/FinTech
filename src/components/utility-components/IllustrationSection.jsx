import React from 'react';

// Images
import IllustrationImg from '/assets/images/global/illustration.png';

/**
 * IllustrationSection - Displays the illustration with title and description.
 */
const IllustrationSection = () => {
    return (
        <section className='bg-lightGrayishWhite'>
            <div className="container py-24">
                <h2 className='text-slate-900 font-medium text-3xl lg:text-4xl font-inter'>Illustration of the template</h2>

                <p className='text-purple-600 font-inter font-normal text-2xl mt-6'>Made by UIAppX</p>
                <div className="mt-10">
                    <img className='w-full rounded-xl' src={IllustrationImg} alt="Illustration" />
                </div>
            </div>
        </section>
    );
};

export default IllustrationSection;
