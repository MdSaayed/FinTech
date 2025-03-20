import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  // Preload Lottie animation when the app loads
  useEffect(() => {
    fetch("/loader.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading, animationData }}>
      {children}
    </LoadingContext.Provider>
  );
};

// PropTypes validation
LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children is a valid React node
};

export const useLoading = () => useContext(LoadingContext);
