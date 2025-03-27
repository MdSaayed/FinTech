import React from 'react';
import { Link } from 'react-router-dom';

// Images
import TablerImg from '/assets/images/global/tabler.png';

/**
 * IconographySection - Displays the section for the source of the iconography.
 */
const IconographySection = () => {
    return (
        <section>
            <div className="container py-24">
                <div className="bg-white rounded-2xl py-12 px-4 md:px-5 lg:px-10">
                    <h2 className='text-slate-900 font-semibold text-3xl lg:text-4xl font-inter'>Iconography</h2>
                    <p className='text-gray-600 font-normal text-lg mt-12'>
                        Iconography was sourced from <Link to='https://tablericons.com/' className='text-purple-600 underline' title="Link to Tabler Icons website">Tabler Icons</Link> which is available under a CC0 license.
                    </p>

                    <div className="mt-10">
                        {/* Add alt text for image */}
                        <img className='w-full rounded-xl object-cover' src={TablerImg} alt="Tabler Icons collection" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IconographySection;
