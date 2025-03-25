import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect } from "react";

/**
 * VideoPopup Component
 * Displays a popup modal with a video player. 
 * The modal can be closed by clicking the close button or pressing the 'Escape' key.
 * 
 * @param {boolean} showPopup - Flag to control visibility of the popup.
 * @param {Function} onClose - Function to close the popup.
 * @param {string} videoLink - Link to the video source.
 * @returns {JSX.Element|null} The rendered popup modal, or null if not visible.
 */
const VideoPopup = ({ showPopup, onClose, videoLink }) => {
  useEffect(() => {
    // Close the modal if the Escape key is pressed
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener for Escape key when popup is shown
    if (showPopup) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup the event listener on unmount or when showPopup changes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup, onClose]);

  // Return null if popup is not visible
  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative rounded-md shadow-lg max-w-4xl w-full bg-white m-4">
        
        {/* Close Button */}
        <button
          className="absolute -top-8 right-0 md:-top-3 md:-right-3 cursor-pointer text-neutral-700 w-6 h-6 bg-white rounded-full flex items-center justify-center z-50"
          onClick={onClose}
          aria-label="Close video"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>

        {/* Video Player */}
        <video
          controls
          autoPlay
          className="w-full rounded-md"
          aria-label="Video player"  // Accessible label for screen readers
        >
          <source src={videoLink || "/default-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  showPopup: PropTypes.bool.isRequired, // Whether the popup is visible
  onClose: PropTypes.func.isRequired, // Function to close the popup
  videoLink: PropTypes.string, // URL of the video (optional)
};

export default VideoPopup;
