import React from 'react';
import { Table } from './Table';

// Plan options available for comparison (could be fetched from an API in the future)
const plans = [
  { name: "Basic Plan", key: "basic" },
  { name: "Premium Plan", key: "premium" },
  { name: "Enterprise Plan", key: "enterprise" },
];

// List of features with categories and exclusions, ideal for use in comparing plans
const features = [
  { category: "Analytics", name: "Data enhancement strategies" },
  { category: "Analytics", name: "Customer behavior insights" },
  { category: "Analytics", name: "Conversion funnel improvement" },
  { category: "Analytics", name: "Seamless email and calendar integration", details: { basic: "1 account per user", premium: "2 accounts per user", enterprise: "3+ accounts per user" } },
  { category: "Analytics", name: "Real-time teamwork" },
  { category: "Reports", name: "Monthly budget allocation for online ads", excluded: ["basic"] },
  { category: "Reports", name: "Instagram Advertising" },
  { category: "Reports", name: "Twitter Advertising", excluded: ["basic"] },
  { category: "Reports", name: "YouTube Advertising" },
  { category: "Reports", name: "Bing Advertising", excluded: ["basic", "premium"] },
  { category: "Support", name: "Personalized account representative", excluded: ["basic"] },
  { category: "Support", name: "24/7 support portal access" },
  { category: "Support", name: "Expedited customer service", excluded: ["basic"] },
];

const ComparePlans = () => {
  return (
    <section className="overflow-x-auto">
      <div className="container mx-auto px-4">
        {/* Page Title - Clear heading for screen readers and search engines */}
        <h2 className="text-5xl font-medium  text-center mb-16 text-slate-900">
          Compare Plans
        </h2>
        {/* Table Component Rendering the Features Comparison */}
        <Table plans={plans} features={features} />
      </div>
    </section>
  );
};

export default ComparePlans;
