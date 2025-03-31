// Testimonials.js
import React, { useState } from 'react'; // Import React and useState hook
import { Subtitle, Title, Description, TestimonialCard, VideoSection} from '../../components'; // Import Subtitle, Title, and Description components
import reviewVideo from "/assets/videos/testimonial-review.mp4";
/**
 * Testimonials Component
 * Displays a section with user testimonials, customer stories video, and user information.
 * 
 * @returns {JSX.Element} The rendered Testimonials component.
 */
const Testimonials = () => {
    const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup

    return (
        <section>
            <div className="container py-24"> {/* Main container for section padding */}
                {/* Subtitle Section */}
                <Subtitle text="Testimonials" align="justify-center" className="bg-white" />

                {/* Title Section */}
                <Title className="max-w-[576px] text-center">
                    Here's What Our Users Are <span>Chatting About!</span>
                </Title>

                {/* Description Section */}
                <Description
                    text="Our Financial Management Platform Is Transforming Money Management. Here’s What Users Say."
                    align="justify-center"
                    className="max-w-[490px]"
                />

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 mt-16">
                    {/* Video Section */}
                    <VideoSection
                        setShowPopup={setShowPopup}
                        showPopup={showPopup}
                        videoLink={reviewVideo}
                    />

                    {/* Testimonial Card */}
                    <TestimonialCard
                        name="Jasper Collins"
                        username="@jaspercollins"
                        testimonial="This Finance App Template Is A Game-Changer! It's User-Friendly, Making Budgeting And Financial Tracking A Breeze. It's Incredibly Convenient And Efficient."
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
