import React from 'react';

const TabItem = ({number, title, description, active, onClick }) => {
    return (
        <div 
            className={`flex items-start space-x-8 py-4 px-3 rounded-lg cursor-pointer ${active && 'bg-gray-50'}`}
            onClick={onClick}
            >
        <div>
            <span className={`w-8 h-8 flex items-center justify-center font-medium text-xl mt-1 rounded-full
                             ${active ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{number}</span>
        </div>
        <div className='space-y-4'>
          <h3 className="text-3xl font-geist text-neutral-900 font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
};

export default TabItem;
