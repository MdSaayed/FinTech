import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

// Create A New Context For Loading State
const LoadingContext = createContext();

// LoadingProvider Component To Provide Loading Context To The App
export const LoadingProvider = ({ children }) => {
  // State To Manage Loading Status
  const [isLoading, setIsLoading] = useState(false);

  // Function To Start Loading (Set isLoading To True)
  const startLoading = () => setIsLoading(true);

  // Function To Stop Loading (Set isLoading To False)
  const stopLoading = () => setIsLoading(false);

  // Provide The Loading Context To Children Components
  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// PropTypes Validation To Ensure Proper Types Are Passed
LoadingProvider.propTypes = {
  // Validate That Children Is A Valid React Node
  children: PropTypes.node.isRequired,
};

// Custom Hook To Access Loading Context In Any Component
export const useLoading = () => useContext(LoadingContext);
