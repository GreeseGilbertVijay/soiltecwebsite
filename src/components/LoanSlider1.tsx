import { useState, useEffect } from 'react';

interface LoanSlider1Props {
  imageList: string[];
  imageTexts: string[];
  interval?: number; // in ms, default 3000
  className?: string;
}

const LoanSlider1 = ({ imageList, imageTexts, interval = 4000, className = '' }: LoanSlider1Props) => {
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
    <div className={`flex items-center ${className}`}>
      <img
        key={currentImage}
        src={imageList[currentImage]}
        alt={imageTexts[currentImage]}
        className={`object-contain transition-all duration-700 ease-in-out ${animate ? 'slide-in-bottom' : ''}`}
        style={{ width: '60px', height: '60px', minWidth: '60px', minHeight: '60px' }}
      />
      <span className={`font-semibold ml-2 ${animate ? 'slide-in-bottom' : ''}`}>{imageTexts[currentImage]}</span>
    </div>
  );
};

export default LoanSlider1; 