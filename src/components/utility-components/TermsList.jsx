import React from 'react';

/** 
 * TermsList Component 
 * Reusable List Component For User Responsibilities 
 */
const TermsList = ({ items }) => {
    return (
        <ul className="list-none mt-12">
            {items.map((item, index) => (
                <li key={index} className="relative font-geist text-base font-normal text-gray-600 before:content-['\2022'] before:absolute before:left-0 before:text-gray-600 before:text-xl before:leading-none before:top-3 before:-translate-y-1/2 pl-5">
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default TermsList;
