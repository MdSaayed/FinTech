import React, { useEffect, useState } from 'react';
import Cta from '../components/cta/Cta';
import Faq from './../components/faq/Faq';
import { useLoaderData } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';
import Loading from '../components/loading/Loading';
import Swal from 'sweetalert2';


const PricingSingle = () => {
    const pricingData = useLoaderData(); // Fetch data using useLoaderData
    const { isLoading, startLoading, stopLoading } = useLoading(); 
    const [error, setError] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState("monthly");
  
    useEffect(() => {
      startLoading();
  
      if (pricingData) {
        stopLoading(); 
      } else {
        setError("Failed to load data.");
        stopLoading();
      }
    }, [pricingData]);
  
    // Handle Purchase
    const handlePurchase = () => {
      Swal.fire({
        title: "Thank You!",
        text: "Thank you for purchasing!",
        icon: "success",
        confirmButtonText: "OK",
      });
    };
    
    // Extract prices dynamically
    const monthlyPrice = pricingData?.packages?.monthly?.price || "N/A";
    const yearlyPrice = pricingData?.packages?.yearly?.price || "N/A";
    const isMonthly = selectedDuration === "monthly";
  
    if (isLoading) return <Loading />;
    if (error) return <p className="text-red-500">{error}</p>;
  
    return (
        <>        
              <section className="">
                <div className="container py-10 lg:py-24">
                  <div className="bg-white rounded-2xl p-5 md:p-10"> 
                      <div className="flex flex-col lg:flex-row justify-between gap-y-12 gap-x-8 ">
                          <div className="">
                            <h1 className="text-gray-900 text-left text-3xl font-geist font-bold">{pricingData?.name}</h1>
                            <div className="mt-8">
                              <ul className="space-y-4 list-none text-gray-700 font-inter">
                                {pricingData?.packages?.[selectedDuration]?.features?.map((item, index) => (
                                  <li key={index} className="relative text-lg font-normal text-davyGray before:content-['\2022'] before:absolute before:left-0 before: text-gray-700 before:text-xl before:leading-none before:top-1/2 before:-translate-y-1/2 pl-5">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
          
                          <div className="order-first lg:-order-none max-w-md">
                            <div className="md:min-w-72 gray-50 rounded-lg p-8 bg-gray-50 border-gray-100 shadow">
                              <span className="text-lg text-gray-800 font-geist font-normal">Get Your Plan Today</span>
                              <h3 className="text-4xl text-primary font-semibold my-4">
                                $ {isMonthly ? monthlyPrice.replace(/[^0-9]/g, "") : yearlyPrice.replace(/[^0-9]/g, "")} USD
                              </h3>

                              
                              <div>
                                <p className="font-semibold font-geist text-2xl text-gray-800">{isMonthly ? "Monthly" : "Yearly"}</p>
                                <p className="text-base font-normal text-gray-700 mt-3">
                                  {isMonthly ? `or ${yearlyPrice} USD yearly` : `or ${monthlyPrice} USD per month`}
                                </p>
                              </div>
            
                              <div className="space-y-4 my-6">
                                <select
                                  className="w-full px-0 py-1 border-b text-gray-500 bg-transparent border-gray-300 font-inter text-lg font-medium focus:outline-none"
                                  value={selectedDuration}
                                  onChange={(e) => setSelectedDuration(e.target.value)}
                                >
                                  <option value="monthly">Monthly</option>
                                  <option value="yearly">Yearly</option>
                                </select>
                              </div>
            
                              <button
                                  className="bg-purple-600 text-white border px-4 py-[6px] rounded-[32px] w-full text-center block text-primary hover:text-primary transition-all duration-300 ease-in-out"
                                  onClick={handlePurchase} 
                                >
                                  Buy Now
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className="mt-20">
                          <h3 className="text-gray-600 text-3xl font-semibold mb-4">Inclusive Plans</h3>
                          <p className="text-base font-normal text-gray-700">
                            {pricingData?.description}
                          </p>
                      </div>
                  </div>
                </div>
              </section>
            <Faq />
            <Cta />
        </>
    );
};

export default PricingSingle;