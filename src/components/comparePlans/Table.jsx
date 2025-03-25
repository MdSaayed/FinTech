import React from 'react';
import PropTypes from 'prop-types';

// Images
import CloseIcon from "/assets/icons/close.svg";
import CheckIcon from "/assets/icons/check.svg";

// Table Component for displaying the plan comparisons
const Table = ({ plans, features }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-200 rounded-2xl">
      <table className="min-w-[700px] w-full border-collapse border-purple-100 rounded-2xl text-gray-700">
        {/* Table Header Section: Accessible header for screen readers */}
        <thead>
          <tr className="bg-purple-600 text-left">
            <th className="py-4 px-10 text-white font-geist font-medium" scope="col">Feature</th>
            {/* Dynamically creating table headers based on available plans */}
            {plans.map(plan => (
              <th key={plan.key} className="py-4 px-10 text-center text-white font-geist font-medium" scope="col">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        
        {/* Table Body: Maps through features and dynamically creates rows */}
        <tbody>
          {features.map(({ category, name, excluded, details }, index) => (
            <tr key={index} className="border-t bg-gray-50 text-gray-700 text-lg font-normal leading-normal font-inter">
              {/* Feature Name Cell */}
              <td className="px-10 py-4 font-normal">{name}</td>
              {/* Iterates through the plans to show their respective feature availability */}
              {plans.map(plan => (
                <td key={plan.key} className="px-10 py-4 text-center">
                  {/* Displaying custom details if available for a feature */}
                  {details ? (
                    details[plan.key] // Displays the specific detail for the plan
                  ) : excluded?.includes(plan.key) ? (
                    // Displays an icon if the feature is not included in the plan
                    <img src={CloseIcon} className="mx-auto" alt="Not Included" />
                  ) : (
                    // Displays an icon if the feature is included in the plan
                    <img src={CheckIcon} className="mx-auto" alt="Included" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Prop types validation ensures that only the correct types of data are passed to the component
Table.propTypes = {
  // Plans array, each plan should have a 'name' and 'key' (used for the table)
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  
  // Features array, each feature should have a 'name', possible 'excluded' plans, and optional 'details'
  features: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      excluded: PropTypes.arrayOf(PropTypes.string),
      details: PropTypes.object,
    })
  ).isRequired,
};

export { Table };
