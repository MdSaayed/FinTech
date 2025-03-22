import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

// Plan options available
const plans = [
  { name: "Basic Plan", key: "basic" },
  { name: "Premium Plan", key: "premium" },
  { name: "Enterprise Plan", key: "enterprise" },
];

// Feature list with categories and exclusions
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

const ComparePlans = ({ plan }) => {
  return (
    <section className="overflow-x-auto">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h2 className="text-5xl font-medium font-geist text-center mb-16 text-slate-900">Compare Plans</h2>
        
        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-gray-200 rounded-2xl">
          <table className="min-w-[700px] w-full border-collapse border-purple-100 rounded-2xl text-gray-700">
            {/* Table Header */}
            <thead>
              <tr className="bg-purple-600 text-left">
                <th className="py-4 px-10 text-white font-geist font-medium">Feature</th>
                <th className="py-4 px-10 text-center text-white font-geist font-medium">Basic</th>
                <th className="py-4 px-10 text-center text-white font-geist font-medium">Premium</th>
                <th className="py-4 px-10 text-center text-white font-geist font-medium">Enterprise</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {features?.map(({ category, name, excluded, details }, index) => (
                <tr key={index} className="border-t bg-gray-50 text-gray-700 text-lg font-normal leading-normal font-inter">
                  <td className="px-10 py-4 font-normal">{name}</td>
                  {["basic", "premium", "enterprise"].map((p) => (
                    <td key={p} className="px-10 py-4 text-center">
                      {details ? (
                        details[p] // Display custom details if available
                      ) : excluded?.includes(p) ? (
                        <img src="/assets/icons/close.svg" className="mx-auto" alt="Not Included" />
                      ) : (
                        <img src="/assets/icons/check.svg" className="mx-auto" alt="Included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
