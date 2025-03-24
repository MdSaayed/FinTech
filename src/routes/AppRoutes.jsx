import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/lazyLoad/LazyLoad";
import MainLayout from "../layouts/MainLayout";
import { singlePostLoader, blogLoader, singlePricingLoader } from "./Loader";

// ✅ Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Features = lazy(() => import("../pages/Features"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogSingle = lazy(() => import("../pages/BlogSingle"));
const Pricing = lazy(() => import("../pages/Pricing"));
const PricingSingle = lazy(() => import("../pages/PricingSingle"));
const Contact = lazy(() => import("../pages/Contact"));
import NotFound from './../pages/NotFound';
import licenses from "../pages/licenses";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfServices from "../pages/TermsOfServices";

// ✅ Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <LazyLoad component={Home} /> },
      { path: "about", element: <LazyLoad component={About} /> },
      { path: "features", element: <LazyLoad component={Features} /> },
      { path: "blog", element: <LazyLoad component={Blog} />, loader: blogLoader },
      { path: "blog/:id", element: <LazyLoad component={BlogSingle} />, loader: singlePostLoader },
      { path: "pricing", element: <LazyLoad component={Pricing} /> },
      { path: "pricing/:id", element: <LazyLoad component={PricingSingle} />, loader: singlePricingLoader },
      { path: "contact", element: <LazyLoad component={Contact} /> },
      { path: "licenses", element: <LazyLoad component={licenses} /> },
      { path: "privacy-policy", element: <LazyLoad component={PrivacyPolicy} /> },
      { path: "terms-and-conditions", element: <LazyLoad component={TermsOfServices} /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />, // ✅ Shows ErrorPage without Header/Footer
  },
]);

export default router;
