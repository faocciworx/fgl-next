// hooks/useMediaQuery.js

import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const updateMatches = () => setMatches(mediaQueryList.matches);

      // Set initial state
      updateMatches();

      // Add event listener and cleanup
      mediaQueryList.addEventListener("change", updateMatches);
      return () => {
        mediaQueryList.removeEventListener("change", updateMatches);
      };
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;
