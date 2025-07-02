import { useState, useEffect } from 'react';

interface LoanSliderProps {
  imageList: string[];
  imageTexts: string[];
  interval?: number; // in ms, default 3000
  className?: string;
}

const LoanSlider = ({ imageList, imageTexts, interval = 3000, className = '' }: LoanSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % imageList.length);
        setAnimate(true);
      }, 100); // short delay to reset animation
    }, interval);
    setAnimate(true);
    return () => clearInterval(sliderInterval);
  }, [imageList.length, interval]);

  return (
    <div className={`flex flex-row items-center justify-start ${className}`}>
      <img
        key={currentImage}
        src={imageList[currentImage]}
        alt={imageTexts[currentImage]}
        className={`w-16 h-16 object-contain mx-auto transition-all duration-700 ease-in-out ${animate ? 'slide-in-bottom' : ''}`}
        style={{ minWidth: '48px', minHeight: '48px' }}
      />
      <span className={`text-base font-semibold ml-4 ${animate ? 'slide-in-bottom' : ''}`}>{imageTexts[currentImage]}</span>
    </div>
  );
};

export default LoanSlider; 