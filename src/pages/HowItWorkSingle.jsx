import React from "react";
import { Description, ErrorMessage, Subtitle, Title } from "../components";
import { useLoaderData } from "react-router-dom";

const HowItWorkSingle = () => {
    const features = useLoaderData(); // Fetch Data Using Loader
    const title = features?.title; // Use prop if available, else use loader data

    if (!features) return <ErrorMessage error="Oops! Feature Not Found." />;

    return (
        <section>
            <div className="container">
                {/* Subtitle */}
                <Subtitle text="Features Details" />

                {/* Title */}
                <Title className="text-center">{title}</Title>

                {/* Feature Content */}
                <div className="mt-6">
                    {/* Features Image */}
                    <img className="mx-auto" src={features?.image} alt="" />

                    {/* Feature Description */}
                    <p className="text-gray-600 font-normal text-base font-inter mt-10">{features?.details}</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorkSingle;
