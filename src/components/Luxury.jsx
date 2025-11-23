import React, { useState, useEffect } from 'react';

const Luxury = () => {
  const slides = [
    { image: "/images/heroimg.avif", alt: "Mountain landscape" },
    { image: "/images/heroimg2.avif", alt: "Swiss Alps" },
    { image: "/images/heroimg3.avif", alt: "Luxury resort" },
    { image: "/images/heroimg4.avif", alt: "Mountain landscape" },
    { image: "/images/res1.avif", alt: "Swiss Alps" },
    { image: "/images/res4.avif", alt: "Luxury resort" },
    { image: "/images/res5.avif", alt: "Luxury resort" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-white">
      <div className="py-12 px-4 sm:px-12 text-center">
        <h5 className="text-sm sm:text-md font-light tracking-wider mb-4 sm:mb-8 text-[#ba9d75] mt-10">
          SWISS HERITAGE MEETS MODERN LUXURY
        </h5>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1b1c1b] mx-auto leading-relaxed">
          CozyStay in the heart of the mountains is an architectural<br />
          masterpiece offering contemporary accommodations<br />
          with unrivalled ski and hiking trails.
        </h3>
      </div>

      <div className="relative w-full py-8">
        <div className="max-w-8xl mx-auto px-4">
          <div className="relative  h-64 sm:h-80 md:h-94  shadow-2xl">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-[${100 / slidesToShow}%] h-full flex-shrink-0`}
                  style={{ minWidth: `${100 / slidesToShow}%` }}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70  hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 w-12 h-12"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 w-12 h-12"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
