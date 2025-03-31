import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import { pricingLoader } from '../../routes/Loader.js';
import {Subtitle, Title, Description, ErrorMessage, } from "../../components"
import { useLoading } from "../../context/LoadingContext"; // Import Loading Context To Manage Loading State

const PricingGrid = () => {
    const [plans,setPlans]=useState([]);
    const [packageType,setPackageType] = useState('monthly');
    const { startLoading, stopLoading } = useLoading(); // Get Loading Context Methods
    const [error, setError] = useState(null);

    useEffect(() => {
        startLoading(); // Start Loading
        const fetchPricingData = async () => {
            try {
                const data = await pricingLoader();  // Ensure pricingLoader is returning a Promise of an array
                setPlans(data);
                            
                if (!data || data.length === 0) {
                    throw new Error("No pricing data available."); // Handle empty response
                }
            } catch (err) {
                setError("Failed to load pricing data"); // error message
            } finally {
                stopLoading(); // Stop Loading (Only needed here)
            }
        };
    
        fetchPricingData();
    }, []);    
   // Empty dependency array ensures this effect runs only once when the component mounts


    // Showing Error
    if(error) return <ErrorMessage error={error} />

  return (
    <section>
        <div className="container">
            {/* Subtitle */}
            <Subtitle text='Pricing' align='justify-center' className='bg-white' />

            {/* Title */}
            <Title className="text-center">Choose a pricing plan!</Title>

            {/* Description */}
            <Description text="Take charge of your financial future with personalized tools and insights." className="max-w-[400px]" />

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center mb-10 mt-8 gap-2">
                <button 
                    className={`px-4 py-2 text-gray-700 font-normal  text-base rounded-md ${packageType == 'monthly' && 'bg-white shadow-lg'}`} 
                    onClick={()=> setPackageType('monthly')}>Monthly billing</button>
                <button 
                    className={`px-4 py-2 text-gray-700 font-normal  text-base rounded-md ${packageType == 'yearly' && 'bg-white shadow-lg'}`} 
                    onClick={()=> setPackageType('yearly')}>Annual billing <span className="text-purple-600">[Save 20%]</span></button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-8">
                {plans?.map((plan, index) => (
                    <Card key={index} plan={plan} packageType={packageType} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default PricingGrid;
