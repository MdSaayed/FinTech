import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { Cta, ErrorMessage, Faq,PaymentPopupWrapper } from "../components";
import TermsList from "../components/utility-components/TermsList";

const PricingSingle = () => {
  // Fetch pricing data from loader
  const pricingData = useLoaderData(); 
  
  // Manage loading state
  const { startLoading, stopLoading } = useLoading();

  // Component states
  const [error, setError] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("monthly");
  const [showPayment, setShowPayment] = useState(false);

  // Effect to handle loading state
  useEffect(() => {
    startLoading();
    if (pricingData) {
      stopLoading();
    } else {
      setError("Failed to load data.");
      stopLoading();
    }
  }, [pricingData]);

  // Extract pricing details
  const monthlyPrice = pricingData?.packages?.monthly?.price || "N/A";
  const yearlyPrice = pricingData?.packages?.yearly?.price || "N/A";
  const isMonthly = selectedDuration === "monthly";

  const featuresList = pricingData?.packages?.[selectedDuration]?.features;
  // Convert price to a numerical value for processing
  const price = isMonthly
    ? parseFloat(monthlyPrice.replace(/[^0-9.]/g, "")) || 0
    : parseFloat(yearlyPrice.replace(/[^0-9.]/g, "")) || 0;

  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      {/* Pricing Section */}
      <section>
        <div className="container -mt-16 lg:mt-0">
          <div className="bg-white rounded-2xl py-10 px-5 md:p-10 md:mb-16">
            <div className="flex flex-col lg:flex-row justify-between gap-y-12 gap-x-8">
              {/* Plan Details */}
              <div>
                <h1 className="text-gray-900 text-left text-4xl lg:text-7xl  font-medium">
                  {pricingData?.name}
                </h1>

                <p  className="mt-4 text-gray-500 text-lg">Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="mt-4">
                    <TermsList items={featuresList} className="text-xl space-y-3" />
                </div>
              </div>

              {/* Pricing Box */}
              <div className="order-first lg:-order-none lg:min-w-[350px] max-w-md">
                <div className="md:min-w-72 bg-gray-50 rounded-lg p-8 border border-gray-100 shadow">
                  <span className="text-lg text-gray-800  font-normal">
                    Get Your Plan Today
                  </span>
                  <h3 className="text-4xl text-primary font-semibold my-4">
                    ${price} USD
                  </h3>

                  <div>
                    <p className="font-semibold  text-2xl text-gray-800">
                      {isMonthly ? "Monthly" : "Yearly"}
                    </p>
                    <p className="text-base font-normal text-gray-700 mt-3">
                      {isMonthly ? `or ${yearlyPrice} USD yearly` : `or ${monthlyPrice} USD per month`}
                    </p>
                  </div>

                  {/* Plan Duration Selector */}
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

                  {/* Buy Now Button */}
                  <button
                    className="bg-slate-900 hover:bg-purple-600 text-white border px-4 py-[6px] rounded-[32px] w-full text-center block text-primary hover:text-primary transition-all duration-300 ease-in-out"
                    onClick={() => setShowPayment(true)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Inclusive Plans Description */}
            <div className="mt-20 space-y-4 max-w-3xl">
              <h3 className="text-gray-600 text-3xl font-semibold">Inclusive Plans</h3>
              <p className="text-base font-normal text-gray-700">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
              <p className="text-base font-normal text-gray-700">Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
              <p className="text-base font-normal text-gray-700">Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Payment Popup */}
      {showPayment && <PaymentPopupWrapper price={price} onClose={() => setShowPayment(false)} />}

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <Cta />
    </>
  );
};

export default PricingSingle;
