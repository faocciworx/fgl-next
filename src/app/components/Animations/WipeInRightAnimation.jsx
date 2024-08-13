"use client";
import React, { useEffect, useState } from "react";

const WipeInRightAnimation = ({ children, duration = "2.5s" }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => setIsAnimating(false),
      parseFloat(duration) * 1000
    );
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="wipe-in-right-wrapper">
      {isAnimating && <div className="animation-overlay" />}
      <div className={`wipe-in-right-content ${isAnimating ? "hidden" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default WipeInRightAnimation;
