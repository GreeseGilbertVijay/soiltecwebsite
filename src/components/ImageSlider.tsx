import React, { useState, useEffect } from 'react';

const images = [
  '/images/slider1.png',
  '/images/slider2.png',
  '/images/slider3.png',
  '/images/slider4.png',
  '/images/slider5.png',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000); // every 9 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-black text-xl sm:text-2xl p-2 sm:p-3 bg-yellow-400 hover:bg-yellow-500 rounded-full z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-black text-xl sm:text-2xl p-2 sm:p-3 bg-yellow-400 hover:bg-yellow-500 rounded-full z-10"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors ${
              current === index ? 'bg-yellow-400' : 'bg-yellow-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
