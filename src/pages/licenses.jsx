import React from 'react';
import { Link } from 'react-router-dom';
import {InstructionsSection, IllustrationSection,IconographySection,PhotographySection  } from "../components/utility-components"
import {Cta} from "../components"

const licenses = () => {
    return (
        <>
            {/* Instructions */}
            <InstructionsSection />

            {/* Illustration */}
            <IllustrationSection />

            {/* Iconography */}
            <IconographySection />

            {/* Photography */}
            <PhotographySection />

            {/* Cta */}
            <Cta/>
        </>
    );
};

export default licenses;