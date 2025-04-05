import React, { useState, useEffect } from "react";
import { Title, Description, Subtitle, HowItWorkCard } from "..";
import { useLoading } from "../../context/LoadingContext";
import { howItWorkLoader } from "../../routes/Loader";

const HowItWorkGrid = () => {
  const [works, setWorks] = useState([]); // Corrected state setter
  const [error, setError] = useState(""); // State for error handling
  const { startLoading, stopLoading } = useLoading(); // Loading context

  useEffect(() => {
    const loadFeatures = async () => { // Renamed to avoid function conflict
      startLoading(); 

      try {
        const data = await howItWorkLoader(); // Fetch data

        if (!data || data.length === 0) {
          throw new Error("No data available.");
        }

        setWorks(data);
        setError("");
      } catch (error) {
        setError("Failed to load data. Please try again later.");
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
        <Subtitle text="How it Works" align="justify-center" className="bg-white" />
        <Title className="max-w-[664px] text-center">
          Unlock the <span>full potential of</span> your organization's data!
        </Title>
        <Description
          text="The tools and tricks that today’s teams need to help their companies thrive."
          align="justify-center"
          className="max-w-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-20">
          {works?.map((work, index) => (
            <HowItWorkCard key={index} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorkGrid;
