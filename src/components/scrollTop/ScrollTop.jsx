
import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.key]); // Use location.key to track navigation

  return null;
};

export default ScrollToTop;

