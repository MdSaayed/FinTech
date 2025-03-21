import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const VideoPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [video,setVideo] = useState();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button onClick={openModal} className="px-4 py-2">
        Play Video
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative">
          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 text-xl">
            ✖
          </button>
          <video controls autoPlay className="w-full rounded-md">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default VideoPopup;
