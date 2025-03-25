import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

/**
 * Stats Component
 * Displays animated statistical data (e.g., user count, satisfaction percentage).
 * The numbers animate only when the section becomes visible in the viewport.
 */
const Stats = () => {
  // Define statistics data with values, prefixes, suffixes, and labels
  const statsData = [
    { value: 10000, suffix: "K+", label: "Users Worldwide" },
    { value: 99, suffix: "%", label: "Customer Satisfied" },
    { value: 50, suffix: "+", label: "Seamless Integration" },
    { value: 1, prefix: "$", suffix: "B+", label: "Assets Managed" },
  ];

  // State to track if the section is in view
  const [inView, setInView] = useState(false);
  
  // Reference to the section DOM element for intersection observation
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver callback to trigger when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when section becomes visible
          observer.disconnect(); // Disconnect observer after triggering once to avoid redundant calls
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    // Start observing the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="container section-padding">
        {/* Stats Grid: Layout with responsive columns and borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-b border-gray-300 divide-y sm:divide-y-0 sm:[&>:not(:nth-child(2n+1))]:border-l sm:[&>:not(:nth-child(2n+1))]:border-gray-300 sm:[&>:nth-child(n+3)]:border-t sm:[&>:nth-child(n+3)]:border-gray-300 md:divide-x md:divide-gray-300">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-8 px-6 
                ${index % 4 === 0 ? "md:border-l-0" : ""}
              `}
            >
              {/* Animated counter: Show animated numbers when section is in view */}
              <h2 className="text-4xl font-geist font-semibold text-slate-900">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                ) : (
                  "0" // Display 0 initially before animation starts
                )}
              </h2>
              <p className="text-gray-700 font-geist text-base mt-3">
                {stat.label} {/* Label for the statistic */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
