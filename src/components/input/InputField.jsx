import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation

/**
 * InputField Component:
 * Reusable input field component that displays a label, input, and error message if applicable.
 * It supports different input types and handles validation error display.
 */
const InputField = ({ label, type = "text", name, value, onChange, placeholder, error }) => {
    return (
        <div className="space-y-4 mb-4">
            {/* Label for the input */}
            <label className="block text-gray-700 font-medium">{label} *</label>
            <div>
                {/* Input field */}
                <input
                    type={type} // The type of the input (e.g., text, email, etc.)
                    name={name} // The name of the input field
                    value={value} // The value of the input field
                    onChange={onChange} // Function to handle input change
                    className={`w-full p-2 border rounded-lg outline-none focus:ring-1 focus:ring-purple-200 focus:border-purple-600 ${
                        error ? "border-red-500" : "border-gray-300"
                    }`} // Dynamic class based on error state
                    placeholder={placeholder} // Placeholder text for the input field
                />
                {/* Display error message if exists */}
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </div>
    );
};

// PropTypes validation for ensuring correct data types
InputField.propTypes = {
    label: PropTypes.string.isRequired, // Label should be a string and required
    type: PropTypes.string, // Input type should be a string (default to "text")
    name: PropTypes.string.isRequired, // Input name should be a string and required
    value: PropTypes.string.isRequired, // Input value should be a string and required
    onChange: PropTypes.func.isRequired, // onChange should be a function and required
    placeholder: PropTypes.string, // Placeholder is optional, should be a string
    error: PropTypes.string, // Error is optional, should be a string if provided
};

export default InputField;
