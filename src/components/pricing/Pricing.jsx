import React, { useState } from "react";
import Card from "./Card";
import { section } from "framer-motion/client";
import Subtitle from "../subtitle/Subtitle";
import Title from "../title/Title";
import Description from "../description/Description";

const plans = [
    {
      name: "Personal",
      featuredCard: false,
      packages: {
        monthly: {
          price: "$10/mth",
          features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data each user",
            "Basic chat and email support",
          ]
        },
        yearly: {
          price: "$100/yr",
          features: [
            "All monthly features",
            "Save 2 months on annual plan",
            "Priority support",
            "Exclusive webinars",
            "Early feature access",
          ]
        }
      }
    },
    {
      name: "Professional",
      featuredCard: true,
      packages: {
        monthly: {
          price: "$70/mth",
          features: [
            "Advanced analytics",
            "Unlimited users",
            "50 GB individual data each user",
            "Priority chat support",
            "Custom integrations",
          ]
        },
        yearly: {
          price: "$700/yr",
          features: [
            "All monthly features",
            "Save 2 months on annual plan",
            "Dedicated account manager",
            "Custom reports",
            "24/7 phone support",
          ]
        }
      }
    },
    {
      name: "Teams",
      featuredCard: false,
      packages: {
        monthly: {
          price: "$130/mth",
          features: [
            "Access to all enterprise features",
            "Dedicated onboarding specialist",
            "100 GB individual data each user",
            "Team collaboration tools",
            "Advanced security controls",
          ]
        },
        yearly: {
          price: "$1,300/yr",
          features: [
            "All monthly features",
            "Save 2 months on annual plan",
            "Custom SLA agreements",
            "Personalized training",
            "VIP technical support",
          ]
        }
      }
    }
  ];
  

const Pricing = () => {
    const [packageType,setPackageType] = useState('monthly');
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
