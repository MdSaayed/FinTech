import React, { useEffect, useState } from "react";
import Card from "./Card";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";
import { pricingLoader } from '../../routes/Loader.js';

  

const Pricing = () => {
    const [plans,setPlans]=useState([]);
    const [packageType,setPackageType] = useState('monthly');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPricingData = async () => {
            try {
                const data = await pricingLoader();  // Ensure blogLoader is returning a Promise of an array
                setPlans(data);
            } catch (err) {
                setError("Failed to load Team data");
            } finally {
                setLoading(false);
            }
        };

        fetchPricingData();
    }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

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
                    className={`px-4 py-2 text-gray-700 font-normal font-geist text-base rounded-md ${packageType == 'monthly' && 'bg-white shadow-lg'}`} 
                    onClick={()=> setPackageType('monthly')}>Monthly billing</button>
                <button 
                    className={`px-4 py-2 text-gray-700 font-normal font-geist text-base rounded-md ${packageType == 'yearly' && 'bg-white shadow-lg'}`} 
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

export default Pricing;
