import React, { useState, useEffect } from "react";
import { Title, Description, Subtitle, FeatureCard } from "../../components";
import { useLoading } from "../../context/LoadingContext";
import { featureLoader } from "../../routes/Loader";

const FeatureGrid = () => {
  const [features, setFeatures] = useState([]); // Corrected state setter
  const [error, setError] = useState(""); // State for error handling
  const { startLoading, stopLoading } = useLoading(); // Loading context

  useEffect(() => {
    const loadFeatures = async () => { // Renamed to avoid function conflict
      startLoading(); 

      try {
        const data = await featureLoader(); // Fetch data

        if (!data || data.length === 0) {
          throw new Error("No feature available.");
        }

        setFeatures(data);
        setError("");
      } catch (error) {
        setError("Failed to load features. Please try again later.");
      } finally {
        stopLoading();
      }
    };

    loadFeatures();
  }, []);

  if (error) return <ErrorMessage error={error} />;

  return (
    <section>
      <div className="container">
        <Subtitle text="Our Best Features" align="justify-center" className="bg-white" />
        <Title className="max-w-[664px] text-center">
          Unlock the <span>full potential of</span> your organization's data!
        </Title>
        <Description
          text="The tools and tricks that today’s teams need to help their companies thrive."
          align="justify-center"
          className="max-w-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-16 mt-20">
          {features?.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
