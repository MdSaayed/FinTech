import { Suspense } from "react";
import Loading from "../loading/Loading";

/**
 * ✅ Higher Order Component (HOC) for Lazy Loading
 * - Wraps components in React Suspense
 * - Displays a loading indicator while fetching
 */
const LazyLoad = ({ component: Component }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
