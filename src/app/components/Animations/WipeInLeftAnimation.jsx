"use client";
import React, { useEffect, useState } from "react";

const WipeInLeftAnimation = ({ children, duration = "2.5s" }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => setIsAnimating(false),
      parseFloat(duration) * 1000
    );
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="wipe-in-left-wrapper">
      {isAnimating && <div className="wipe-overlay" />}
      <div className={`wipe-in-left-content ${isAnimating ? "hidden" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default WipeInLeftAnimation;
