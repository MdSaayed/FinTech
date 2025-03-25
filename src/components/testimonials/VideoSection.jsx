// VideoSection.js
import React from 'react'; // Import React
import {VideoPopup} from '../../components'; // Import Subtitle, Title, and Description components

// Images
import PlayButton from "/assets/icons/play-button.svg";
import TestimonialImag from "/assets/imgs/global/man-with-laptop.png";


/**
 * VideoSection Component
 * Displays a video popup with a play button and an image thumbnail.
 * 
 * @param {Function} setShowPopup - Function to control the popup visibility.
 * @param {boolean} showPopup - State to control the visibility of the popup.
 * @param {string} videoLink - Link to the video.
 * 
 * @returns {JSX.Element} The rendered VideoSection component.
 */
const VideoSection = ({ setShowPopup, showPopup, videoLink }) => (
    <div className="mx-auto relative">
        <img src={TestimonialImag} alt="Testimonial Thumbnail" /> {/* Thumbnail */}

        {/* Play Button */}
        <div className="flex items-center gap-3 text-white absolute bottom-8 right-5">
            <span>Customer Stories</span>
            <img
                onClick={() => setShowPopup(true)}
                className="cursor-pointer"
                src={PlayButton}
                alt="Play Button"
            />
        </div>

        {/* Video Popup */}
        <VideoPopup
            showPopup={showPopup}
            onClose={() => setShowPopup(false)}
            videoLink={videoLink}
        />
    </div>
);

export default VideoSection;
