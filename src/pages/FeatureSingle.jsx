import React from "react";
import { BlogFeatured, ErrorMessage, Faq, Subtitle, Title } from "../components";
import { useLoaderData } from "react-router-dom";

const FeatureSingle = () => {
    const features = useLoaderData(); // Fetch Data Using Loader
    const title = features?.title;

    if (!features) return <ErrorMessage error="Oops! Feature Not Found." />;

    return (
        <>
            <section>
                <div className="container -mt-16 lg:mt-0">
                    <div className="bg-white px-4 md:px-5 lg:px-10 py-16 rounded-2xl">
                        {/* Subtitle */}
                        <Subtitle text="Features Details" />

                        {/* Title */}
                        <Title className="text-center">{title}</Title>

                        {/* Feature Content */}
                        <div className="space-y-10 mt-10 max-w-3xl mx-auto">
                            {/* Feature Image */}
                            <div className="bg-[#F3F4F6] p-10 rounded-3xl">
                                <img
                                    className="mx-auto rounded-3xl"
                                    src={features?.detail_image || features?.image}
                                    alt={title || "Feature Image"}
                                />
                            </div>

                            
                            {/*  Content  */}
                            <div className="space-y-10 text-left mx-auto"> 
                                <div className="space-y-5">
                                    <h3 className="text-2xl font-medium text-slate-900">Understand Your Spending Habits</h3>
                                    <p className="max-w-3xl text-left text-gray-600 font-inter text-lg">
                                        Before making any changes, it’s important to understand where your money is going. Review your past bank statements or use budgeting apps to categorize your expenses. Recognizing patterns in your spending helps you spot areas where you can cut back or reallocate funds more effectively.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-medium text-slate-900">Build an Emergency Fund</h3>
                                    <p className="max-w-3xl text-left text-gray-600 font-inter text-lg">
                                        Life is unpredictable, and having a financial cushion can prevent debt when unexpected costs arise. Aim to save at least three to six months’ worth of living expenses. Start small if needed — even setting aside a little each month can add up over time.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-medium text-slate-900">Track Your Progress</h3>
                                    <p className="max-w-3xl text-left text-gray-600 font-inter text-lg">
                                        Monitoring your budget regularly helps you stay accountable. Use spreadsheets, apps, or journaling to track your income and expenses. Keeping tabs on your progress enables you to catch overspending early and make informed adjustments as needed.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-medium text-slate-900">Cut Unnecessary Costs</h3>
                                    <p className="max-w-3xl text-left text-gray-600 font-inter text-lg">
                                        Review your recurring subscriptions, impulse purchases, and lifestyle habits to see where you can trim expenses. Cancel unused services, switch to cost-effective alternatives, and consider whether every purchase aligns with your financial priorities.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    <h3 className="text-2xl font-medium text-slate-900">Stay Motivated and Flexible</h3>
                                    <p className="max-w-3xl text-left text-gray-600 font-inter text-lg">
                                        Staying committed to a budget takes time and patience. Celebrate small wins, remind yourself of your financial goals, and don’t get discouraged by setbacks. Life changes, so allow your budget to evolve with it while keeping your overall vision in sight.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq />

            {/* Featured Blog Section */}
            <BlogFeatured />
        </>
    );
};

export default FeatureSingle;
