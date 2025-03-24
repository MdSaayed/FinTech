import React from 'react';
import PropTypes from 'prop-types';

// TabItem Component: A Single Tab That Displays A Title, Description, And An Indicator Number.
const TabItem = ({number, title, description, active, onClick }) => {
    return (
        <div 
            className={`flex items-start space-x-3 lg:space-x-8 py-4 px-3 rounded-lg cursor-pointer ${active && 'bg-gray-50'}`} // Conditional Styling Based On The "Active" State
            onClick={onClick} // Trigger "OnClick" Event Passed From Parent
        >
            <div>
                {/* Indicator Circle With The Tab Number */}
                <span className={`w-8 h-8 flex items-center justify-center font-medium text-xl mt-1 rounded-full
                                 ${active ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                    {number}
                </span>
            </div>
            <div className='space-y-4'>
                {/* Tab Title */}
                <h3 className="text-2xl md:text-3xl font-geist text-neutral-900 font-semibold">{title}</h3>
                {/* Tab Description */}
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

// Prop Validation: Ensuring That Each Prop Passed To The Component Is Of The Correct Type
TabItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accepts String Or Number
  title: PropTypes.string.isRequired, // Title Must Be A String
  description: PropTypes.string.isRequired, // Description Must Be A String
  active: PropTypes.bool.isRequired, // Active Must Be A Boolean (True Or False)
  onClick: PropTypes.func.isRequired, // onClick Must Be A Function
};

// Default Props: Setting Default Values In Case Some Props Are Not Provided
TabItem.defaultProps = {
  active: false, // By Default, The Tab Is Not Active
  onClick: () => {}, // Default Empty Function For onClick (To Prevent Errors If Not Passed)
};

export default TabItem;
