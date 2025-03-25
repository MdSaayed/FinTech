import React from 'react';
import { Title, Description,  Subtitle, StepCard   } from '../../components';

// Images
import HowWorkIt1 from "/assets/imgs/how-it-works/how-it-works-1.png";
import HowWorkIt2 from "/assets/imgs/how-it-works/how-it-works-2.png";
import HowWorkIt3 from "/assets/imgs/how-it-works/how-it-works-3.png";
import HowWorkIt4 from "/assets/imgs/how-it-works/how-it-works-4.png";

const HowItWorks = () => (
    <section>
        <div className="container">
            {/* Subtitle */}
            <Subtitle text="How It works" align="justify-center" className="bg-white" />

            {/* Title */}
            <Title className="max-w-[498px] text-center">
                See how it all fits in <span>4 easy steps!</span>
            </Title>

            {/* Description */}
            <Description text="The tips and tools that teams today need to help their companies succeed." align="justify-center" className="max-w-[440px]" />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-20">
                {/* Step 1 */}
                <StepCard
                    imgSrc={HowWorkIt1}
                    title="Sign Up Today"
                    description="Kick off your financial exploration!"
                    colSpan="sm:col-span-12 md:col-span-6 lg:col-span-5"
                />

                {/* Step 2 */}
                <StepCard
                    imgSrc={HowWorkIt2}
                    title="Set Your Goals"
                    description="Share your aspirations and get a strategy!"
                    colSpan="sm:col-span-12 md:col-span-6 lg:col-span-7"
                />

                {/* Step 3 */}
                <StepCard
                    imgSrc={HowWorkIt3}
                    title="Track Your Progress"
                    description="Track your spending in real-time and reach your goals!"
                    colSpan="sm:col-span-12 md:col-span-6 lg:col-span-6"
                />

                {/* Step 4 */}
                <StepCard
                    imgSrc={HowWorkIt4}
                    title="Achieve Success"
                    description="Unlock your financial potential with expert advice!"
                    colSpan="sm:col-span-12 md:col-span-6 lg:col-span-6"
                />
            </div>
        </div>
    </section>
);

export default HowItWorks;
