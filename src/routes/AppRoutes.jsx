import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/lazyLoad/LazyLoad";
import MainLayout from "../layouts/MainLayout";
import { blogLoader, LoadSinglePricingData } from "./Loader";

// ✅ Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Features = lazy(() => import("../pages/Features"));
const Blog = lazy(() => import("../pages/Blog"));
const Pricing = lazy(() => import("../pages/Pricing"));
const PricingSingle = lazy(() => import("../pages/PricingSingle"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

// ✅ Define routes with LazyLoad HOC
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <LazyLoad component={Home} /> },
      { path: "about", element: <LazyLoad component={About} /> },
      { path: "features", element: <LazyLoad component={Features} /> },
      { 
        path: "blog", 
        element: <LazyLoad component={Blog} /> ,
        loader: blogLoader, //Fetch Blog
      },
      { path: "pricing", element: <LazyLoad component={Pricing} /> },
      {
        path: "pricing/:id",
        element: <LazyLoad component={PricingSingle} />,
        loader: LoadSinglePricingData, // Fetch pricing data
      },
      { path: "contact", element: <LazyLoad component={Contact} /> },
      { path: "*", element: <LazyLoad component={NotFound} /> }, // Catch-all 404 route
    ],
  },
]);

export default router;
