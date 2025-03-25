import React from 'react';
import Cta from '../components/cta/Cta';
import { Link } from 'react-router-dom';
import Title from '../components/title/Title';
import {InstructionsSection, IllustrationSection,IconographySection,PhotographySection  } from "../components/utility-components"

const licenses = () => {
    return (
        <>
             <InstructionsSection />
            <IllustrationSection />
            <IconographySection />
            <PhotographySection />

            {/* Cta */}
            <Cta/>
        </>
    );
};

export default licenses;