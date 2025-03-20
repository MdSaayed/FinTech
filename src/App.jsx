import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      // Import page components
import About from "./pages/About";    // Import page components
import Contact from "./pages/Contact";// Import page components
import NotFound from "./pages/NotFound"; // 404 Page
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      {/* Wrap all routes in the Layout */}
      <Route path="/" element={<MainLayout />}>
        {/* Define child routes */}
        <Route index element={<Home />} />     {/* Home Page */}
        <Route path="about" element={<About />} />  {/* About Page */}
        <Route path="contact" element={<Contact />} />  {/* Contact Page */}
        <Route path="*" element={<NotFound />} />  {/* 404 Page */}
      </Route>
    </Routes>
  );
};

export default App;
