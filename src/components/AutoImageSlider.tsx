import { useEffect, useState } from 'react';

const images = [ '/images/1.png', '/images/2.png', '/images/3.png', 
    '/images/4.png', '/images/5.png', '/images/6.png', '/images/7.png',
    '/images/8.png', '/images/9.png', '/images/10.png', '/images/11.png',
    '/images/12.png', '/images/13.png', '/images/14.png', '/images/15.png',
    '/images/16.png', '/images/17.png']

const AutoImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-700"
      />
    </div>
  );
};

export default AutoImageSlider;
