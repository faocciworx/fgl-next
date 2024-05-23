"use client";
import { useState, useEffect, useRef } from "react";

const ClickableImageModal = ({
  imageUrl,
  containerClassName,
  imageClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [zoomed, setZoomed] = useState(false);
  const modalContentRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle the modal state
    if (!isOpen) setZoomed(false); // Reset zoom state when modal is closed
  };

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    setInitialPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    toggleModal(); // Open the modal immediately without delay
  };

  const handleZoom = () => {
    setZoomed(!zoomed); // Toggle zoom state
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !modalContentRef.current.contains(event.target)) {
        toggleModal();
        setZoomed(false); // Close zoom state when clicking outside the modal
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`flex justify-start items-center ${containerClassName}`}>
      <div
        className={`cursor-pointer transition-transform transform-gpu hover:scale-110 ${imageClassName}`}
        onClick={handleClick}
      >
        <img
          src={imageUrl}
          className={`object-cover`}
          alt="Your Image"
        />
      </div>

      {/* Modal Content */}
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: isOpen ? 10 : -1 }} // Ensure the overlay is above other content
      >
        <div
          ref={modalContentRef}
          className={`modal-content relative transform shadow-lg p-4`}
          style={{
            transitionProperty: "transform",
            transitionDuration: "0.5s",
            transformOrigin: `${initialPosition.x}px ${initialPosition.y}px`,
            maxWidth: "90vw",
            maxHeight: "90vh",
            cursor: zoomed ? "zoom-out" : "zoom-in",
          }}
          onClick={handleZoom}
        >
          <button
            onClick={toggleModal}
            className="absolute -top-4 right-2 text-white text-xl w-8 h-8 flex justify-center items-center z-10"
          >
            X
          </button>
          <div className="overflow-hidden">
            <img
              src={imageUrl}
              className={`w-auto h-auto transition-transform duration-300 ${zoomed ? "scale-150" : ""}`}
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickableImageModal;
