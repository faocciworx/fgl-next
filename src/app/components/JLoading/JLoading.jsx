"use client";
import React, { useState, useEffect, useRef } from "react";

const JLoading = ({
  splashVPos = "35%",
  loaderVPos = "52%",
  splashID = "#jpreContent",
  showSplash = true,
  showPercentage = true,
  autoClose = true,
  closeBtnText = "Start!",
  countdownDuration = 500, // Very short duration for ultra-fast loading
  splashFunction = () => {},
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade-out
  const overlayRef = useRef(null);
  const splashRef = useRef(null);

  useEffect(() => {
    let startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(
        Math.round((elapsedTime / countdownDuration) * 100),
        100
      );
      setLoadingProgress(progress);

      if (progress === 100) {
        clearInterval(interval);
        setLoadingComplete(true);
        if (autoClose) {
          setFadeOut(true); // Trigger fade-out animation
          setTimeout(() => {
            overlayRef.current.style.display = "none";
          }, 500); // Delay to match fade-out duration
        }
      }
    }, 5); // High frequency of updates

    return () => clearInterval(interval); // Cleanup on unmount
  }, [countdownDuration, autoClose]);

  useEffect(() => {
    splashRef.current = document.querySelector(splashID);
    if (splashRef.current && splashFunction) {
      splashFunction();
    }
  }, [splashID, splashFunction]);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999999,
    transition: "opacity 0.5s ease-out", // Fade-out transition
    opacity: fadeOut ? 0 : 1, // Apply fade-out effect
  };

  const splashStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const loaderStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const percentageStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  return (
    <div
      ref={overlayRef}
      id="jpreOverlay"
      className="bg-primary absolute w-full h-full"
      style={overlayStyle}
    >
      {showSplash && splashRef.current && (
        <div
          id="jpreSlide"
          className="text-[22px] text-white text-center w-1/2 h-[30%]"
          style={{ ...splashStyle, top: splashVPos }}
        >
          {splashRef.current.innerHTML}
        </div>
      )}
      <div
        id="jpreLoader"
        className="w-full h-[3px] bg-[#cecece]"
        style={{ ...loaderStyle, top: loaderVPos }}
      >
        <div
          id="jpreBar"
          className="bg-white"
          style={{ width: `${loadingProgress}%`, height: "100%" }} // Fixed template literal
        ></div>
        {showPercentage && (
          <div
            id="jprePercentage"
            className="z-negative font-bold text-center mt-[-10px] text-[160px] md:text-[160px] lg:text-[300px] tracking-[-8px] text-white"
            style={percentageStyle}
          >
            {loadingProgress}%
          </div>
        )}
        {!autoClose && loadingComplete && (
          <div
            id="jpreButton"
            style={{ position: "relative", height: "100%" }}
            onClick={() => (overlayRef.current.style.display = "none")}
          >
            {closeBtnText}
          </div>
        )}
      </div>
    </div>
  );
};

export default JLoading;
