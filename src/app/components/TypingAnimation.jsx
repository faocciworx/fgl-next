"use client";
import { useEffect, useState } from "react";

const TypingAnimation = ({ texts, baseSpeed = 70, speedVariance = 30, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const randomSpeed = baseSpeed + Math.random() * speedVariance;
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, randomSpeed);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        if (textIndex < texts.length - 1) {
          // Move to the next text
          setTextIndex((prev) => prev + 1);
          setDisplayedText("");
          setCharIndex(0);
        } else {
          // Reset to the first text
          setTextIndex(0);
          setDisplayedText("");
          setCharIndex(0);
        }
      }, baseSpeed);

      return () => clearTimeout(resetTimer);
    }
  }, [textIndex, charIndex, texts, baseSpeed, speedVariance]);

  return (
    <div
      id="text"
      className={`font-general text-xl lg:text-3xl whitespace-pre text-primary overflow-hidden animate-caret ${className}`}
    >
      {displayedText}
    </div>
  );
};

export default TypingAnimation;
