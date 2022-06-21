import { useState, useEffect } from 'react';
import { DisplayWidth, NumberOfCardsFor } from '../constants/constants';

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
    if (widthDisplay >= DisplayWidth.laptop) return NumberOfCardsFor.laptop;
    else if (widthDisplay >= DisplayWidth.tablet) return NumberOfCardsFor.tablet;
    else if (widthDisplay >= DisplayWidth.mobile) return NumberOfCardsFor.mobile;
  }

  return {calculateNumberOfCardsWithResolution}
}

export default useNumberOfCardsWithResolution;