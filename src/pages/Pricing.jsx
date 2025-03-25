import React from 'react';
import {Faq, Cta, PricingGrid, ComparePlans } from "../components";

const Pricing = () => {
    return (
        <>
            {/* Pricing */}
            <PricingGrid />

            {/* Compare Plans */}
            <ComparePlans />

            {/* Faq */}
            <Faq />

            {/* Cta */}
            <Cta />
        </>
    );
};

export default Pricing;