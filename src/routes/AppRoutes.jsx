import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/lazyLoad/LazyLoad";
import MainLayout from "../layouts/MainLayout";
import { singlePostLoader, singlePricingLoader } from "./Loader";
import NotFound from './../pages/NotFound'; 

// ✅ Lazy load all pages, including NotFound, licenses, PrivacyPolicy, etc.
const Index = lazy(() => import("../pages/Index"));
const About = lazy(() => import("../pages/About"));
const Features = lazy(() => import("../pages/Features"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogSingle = lazy(() => import("../pages/BlogSingle"));
const Pricing = lazy(() => import("../pages/Pricing"));
const PricingSingle = lazy(() => import("../pages/PricingSingle"));
const Contact = lazy(() => import("../pages/Contact"));
const Licenses = lazy(() => import("../pages/licenses")); // Lazy load licenses page
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy")); // Lazy load PrivacyPolicy page
const TermsOfServices = lazy(() => import("../pages/TermsOfServices")); // Lazy load TermsOfServices page
const Success = lazy(() => import("../pages/Success")); // Lazy load Success page

// ✅ Define routes with LazyLoad for all pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <LazyLoad component={Index} /> },
      { path: "about", element: <LazyLoad component={About} /> },
      { path: "features", element: <LazyLoad component={Features} /> },
      { path: "blog", element: <LazyLoad component={Blog} /> },
      { path: "blog/:id", element: <LazyLoad component={BlogSingle} />, loader: singlePostLoader },
      { path: "pricing", element: <LazyLoad component={Pricing} /> },
      { path: "pricing/:id", element: <LazyLoad component={PricingSingle} />, loader: singlePricingLoader },
      { path: "contact", element: <LazyLoad component={Contact} /> },
      { path: "licenses", element: <LazyLoad component={Licenses} /> },  
      { path: "privacy-policy", element: <LazyLoad component={PrivacyPolicy} /> }, 
      { path: "terms-and-conditions", element: <LazyLoad component={TermsOfServices} /> },  
    ],
  },
  { path: "success", element: <LazyLoad component={Success} /> },  
  {
    path: "*",
    element:  <NotFound /> 
  },
]);

export default router;
