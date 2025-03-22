import React from 'react';
import Faq from './../components/faq/Faq';
import Cta from './../components/cta/Cta';
import PricingCard from './../components/pricing/Pricing';
import ComparePlans from '../components/comparePlans/ComparePlans';

const Pricing = () => {
    return (
        <>
            {/* Pricing */}
            <PricingCard />

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