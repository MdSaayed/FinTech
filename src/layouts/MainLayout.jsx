import React from "react";
import ScrollToTop from './../components/scrollTop/ScrollTop';
import Footer from './../components/footer/Footer';
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
      <div>
        {/* Scrolls the page to the top when the route changes */}
        <ScrollToTop />

        {/* Navigation bar component */}
        <Navbar />

        {/* Renders the current route's component based on the URL */}
        <Outlet />

        {/* Footer component */}
        <Footer />
      </div>
  );
};

export default MainLayout;


