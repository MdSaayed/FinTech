import React from "react";
import { Description, ErrorMessage, Subtitle, Title } from "../components";
import { useLoaderData } from "react-router-dom";

const FeatureSingle = () => {
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
                    <img className="mx-auto" src={features?.detail_image || features?.image} alt="" />

                    {/* Feature Description */}
                    <p className="text-gray-600 max-w-3xl mx-auto font-normal text-base font-inter mt-10">{features?.description}</p>
                </div>
            </div>
        </section>
    );
};

export default FeatureSingle;
