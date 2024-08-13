"use client";
import React, { useState, useEffect } from "react";
import { FaLink, FaTimes, FaEye } from "react-icons/fa";
import CertificationsData from "./CertificationsData";

const Modal = ({
  Certifications,
  onClose,
  currentIndex,
  setSelectedCertificationIndex,
}) => {
  const [current, setCurrent] = useState(currentIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    };
  }, []);

  const goToPreviousCertification = () => {
    setCurrent((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Certifications.length - 1
    );
  };

  const goToNextCertification = () => {
    setCurrent((prevIndex) =>
      prevIndex < Certifications.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-85"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg p-4 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 md:right-7 lg:right-7 top-0 md:top-3 lg:top-2 text-white text-sm lg:text-lg hover:text-primary"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <img
          src={Certifications[current].src}
          alt=""
          className="w-full mb-2 sm:mb-0"
        />
        <div className="text-white flex flex-col sm:flex-row items-center sm:items-center justify-between text-sm p-2">
          <div className="flex items-center">
            <span>{Certifications[current].title.split(" · ")[0]}</span>
            <a
              href={Certifications[current].liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary"
            >
              View Details
            </a>
          </div>
          <div className="mt-2 sm:mt-0">
            {current + 1} / {Certifications.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificationsGallery = () => {
  const [selectedCertificationIndex, setSelectedCertificationIndex] =
    useState(null);

  const handleCertificationClick = (Certifications, index, event) => {
    const target = event.target;
    const overlayClasses = [
      "bg-opacity-0",
      "transition-opacity",
      "group-hover:bg-opacity-50",
    ];

    if (
      target.classList.contains("h-auto") ||
      target.classList.contains("max-w-full") ||
      target.classList.contains("transition-transform") ||
      overlayClasses.some((className) => target.classList.contains(className))
    ) {
      setSelectedCertificationIndex(index);
    }
  };

  const closeModal = () => {
    setSelectedCertificationIndex(null);
  };

  useEffect(() => {
    if (selectedCertificationIndex !== null) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    }
  }, [selectedCertificationIndex]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 lg:mb-20 gap-y-14">
        {Object.keys(CertificationsData).map((category) =>
          CertificationsData[category].map((certification, index) => (
            <div key={index} className="relative">
              <div
                className="group cursor-pointer overflow-hidden relative rounded-lg"
                onClick={(event) =>
                  handleCertificationClick(
                    CertificationsData[category],
                    index,
                    event
                  )
                }
              >
                <div className="h-auto max-w-full relative transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg">
                  <div className="relative">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={certification.src}
                      alt=""
                    />
                    <div className=" gap-y-1 overflow-hidden leading-6 absolute bottom-4 left-3 sm:left-4 md:left-5 lg:left-5 xl:left-5 bg-primary text-white font-medium rounded-md text-sm py-1 px-5 text-center">
                      {certification.date}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black rounded-lg bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
                    <button
                      className="p-3 text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-full text-xs sm:text-2xl"
                      onClick={() =>
                        window.open(certification.liveUrl, "_blank")
                      }
                    >
                      <FaLink />
                    </button>
                    <button
                      className="p-3 text-white hover:text-white border border-primary hover:bg-primary font-medium rounded-full text-xs sm:text-2xl"
                      onClick={() => setSelectedCertificationIndex(index)}
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <h2 className="text-lg md:text-lg lg:text-xl text-start text-white pointer-events-none font-general font-bold">
                  {certification.title}
                </h2>
                <p className="text-sm text-white pointer-events-none leading-7 lg:leading-8 font-general text-justify lg:text-start">
                  {certification.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {selectedCertificationIndex !== null && (
        <Modal
          Certifications={CertificationsData["All Projects"]}
          currentIndex={selectedCertificationIndex}
          onClose={closeModal}
          setSelectedCertificationIndex={setSelectedCertificationIndex}
        />
      )}
    </div>
  );
};

export default CertificationsGallery;
