import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect } from "react";

const VideoPopup = ({ showPopup, onClose, videoLink }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (showPopup) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup, onClose]);

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative rounded-md shadow-lg max-w-lg w-full bg-white m-4">
        
        {/* Close Button */}
        <button
          className="absolute -top-8 right-0 md:-top-3 md:-right-3 cursor-pointer text-neutral-700 w-6 h-6 bg-white rounded-full flex items-center justify-center z-50"
          onClick={onClose}
          aria-label="Close video"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>

        {/* Video Player */}
        <video controls autoPlay className="w-full rounded-md">
          <source src={videoLink || "/default-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

VideoPopup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoLink: PropTypes.string,
};

export default VideoPopup;
