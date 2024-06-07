"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaEye, FaLink, FaTimes } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import ImageData from "./ImageData";

const Modal = ({ images, onClose, currentIndex, setSelectedImageIndex }) => {
  const [current, setCurrent] = useState(currentIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    };
  }, [current]); // Ensure the effect runs whenever current changes

  const goToPreviousImage = () => {
    setCurrent((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrent((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg max-w-2xl p-4 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 md:right-7 lg:right-7 top-0 md:top-3 lg:top-2 text-white text-sm lg:text-lg hover:text-primary"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-base lg:text-3xl hover:text-primary"
          onClick={goToPreviousImage}
        >
          <BiSolidLeftArrow />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-base lg:text-3xl hover:text-primary"
          onClick={goToNextImage}
        >
          <BiSolidRightArrow />
        </button>
        <img
          src={images[current].src}
          alt=""
          className="w-full rounded-lg mb-2 sm:mb-0"
        />
        <div className="text-white flex items-center justify-between text-sm p-2">
          <div className="flex items-center">
            <span>{images[current].title.split(" · ")[0]}</span>
            <a
              href={images[current].liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary"
            >
              View Details
            </a>
          </div>
          <div>
            {current + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const categories = ["All Projects", "Shoes", "Bags", "Electronics", "Gaming"];
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    }
  }, [selectedImageIndex]);

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`text-sm font-medium px-4 py-2 sm:px-3 sm:py-1.5 me-3 mb-3 rounded-md ${
              activeCategory === category
                ? "text-white bg-primary"
                : "text-white hover:text-white border border-primary hover:bg-primary"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-10 lg:mb-20">
        {ImageData[activeCategory].map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleImageClick(index)}
          >
            <img
              className="h-auto max-w-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110 "
              src={image.src}
              alt=""
            />
            <div className="absolute top-0 left-0 hidden group-hover:flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg">
              <div className="relative group space-x-2 flex flex-col items-center justify-center">
                <div className="text-white flex items-center justify-between text-sm p-2 font-general">
                  {image.title}
                </div>
                <div className="relative group space-x-2 flex items-center justify-center">
                  <button
                    className="p-3 text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-full text-xs sm:text-2xl"
                    onClick={() => window.open(image.githubUrl, "_blank")}
                  >
                    <FaGithub />
                  </button>
                  <button
                    className="p-3 text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-full text-xs sm:text-2xl"
                    onClick={() => window.open(image.liveUrl, "_blank")}
                  >
                    <FaLink />
                  </button>
                  <button
                    className="p-3 text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-full text-xs sm:text-2xl"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <Modal
          images={ImageData[activeCategory]}
          currentIndex={selectedImageIndex}
          onClose={closeModal}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default ImageGallery;
