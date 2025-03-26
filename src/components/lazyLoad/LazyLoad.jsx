import { Suspense, useEffect } from "react";
import Loading from "../loading/Loading";
import { useLoading } from "../../context/LoadingContext";


/**
 * ✅ Higher Order Component (HOC) for Lazy Loading
 * - Wraps components in React Suspense
 * - Displays a loading indicator while fetching
 */
const LazyLoad = ({ component: Component }) => {
  const {startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Start loading when the component is about to mount
    startLoading();

    // Stop loading when the component has mounted
    return () => {
      stopLoading();
    };
  }, [startLoading, stopLoading]);

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
