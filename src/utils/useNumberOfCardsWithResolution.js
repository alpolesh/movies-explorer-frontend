import { useState, useEffect } from 'react';

const useNumberOfCardsWithResolution = () => {
  const [widthDisplay, setWidthDisplay] = useState(window.innerWidth);

  const updateDimension = () => {
    setTimeout(function(){setWidthDisplay(window.innerWidth)}, 1000);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  });

  function calculateNumberOfCardsWithResolution() {
    if (widthDisplay >= 1280) return 12;
    else if (widthDisplay >= 768) return 8;
    else if (widthDisplay >= 320) return 5;
  }

  return {calculateNumberOfCardsWithResolution}
}

export default useNumberOfCardsWithResolution;