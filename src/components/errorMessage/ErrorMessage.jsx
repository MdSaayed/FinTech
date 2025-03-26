import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
    return (
        <section>
            <div className='container bg-white rounded-2xl'>
                <p className="text-center text-red-500 py-5">Error: {error}</p>
            </div>
        </section>
    );
};

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired, // Validate that error is a string
};

export default ErrorMessage;
