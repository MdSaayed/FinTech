import React from "react";
import ScrollToTop from './../components/scrollTop/ScrollTop';
import Footer from './../components/footer/Footer';
import Header from './../components/header/Header';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
      <div>
        {/* Scrolls the page to the top when the route changes */}
        <ScrollToTop />

        {/* Navigation bar component */}
        <Header />

        {/* Renders the current route's component based on the URL */}
        <Outlet />

        {/* Footer component */}
        <Footer />
      </div>
  );
};

export default MainLayout;


