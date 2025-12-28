import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Checkout() {

    const suites = [
        { id: 1, image: "/images/table.avif" },
        { id: 2, image: "/images/res7.avif" },
        { id: 3, image: "/images/res8.avif" },
        { id: 4, image: "/images/res9.avif" },
        { id: 5, image: "/images/res10.avif" }
    ];

    const [slidesToShow, setSlidesToShow] = useState(5);
    const [currentIndex, setCurrentIndex] = useState(suites.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Responsive handling
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesToShow(1);
            else if (window.innerWidth < 768) setSlidesToShow(2);
            else if (window.innerWidth < 1024) setSlidesToShow(3);
            else setSlidesToShow(5);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const duplicatedSuites = [...suites, ...suites, ...suites];
    const slideWidth = 100 / slidesToShow;

    const nextSlide = () => {
        setCurrentIndex(p => p + 1);
        setIsTransitioning(true);
    };

    const prevSlide = () => {
        setCurrentIndex(p => p - 1);
        setIsTransitioning(true);
    };

    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        }
        else if (currentIndex === suites.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(suites.length);
            }, 500);
        }
    }, [currentIndex]);

    return (
        <section className="w-full flex flex-col items-center text-center pt-8 sm:pt-12 md:pt-18 ">

            <div className="max-w-4xl px-4 sm:px-6">
                <span className="text-sm sm:text-md md:text-lg text-[#55694f] font-medium uppercase">
                    Moonlit Resort Experiences
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-black uppercase py-4 sm:py-6 md:py-8">
                    Discover More Than Just Dining
                </h3>

                <p className="text-sm sm:text-base md:text-lg font-normal text-black mb-6 sm:mb-8 md:mb-10">
                    At Moonlit Resort, enjoy not just exquisite dining but also jungle adventures, wellness sanctuary, and premium event spaces—all in a serene natural setting near Chitwan National Park.
                </p>

                <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-full sm:w-64 py-2 sm:py-3 font-normal hover:bg-[#ab916c] transition-colors duration-300 text-sm sm:text-base">
                    Explore All Experiences
                </button>
            </div>

            {/* SLIDER */}
             <div className="relative w-full max-w-8xl mt-8 sm:mt-12 md:mt-20">

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full text-white z-20 ml-2 sm:ml-4 md:ml-8"
                >
                    <FaChevronLeft className="text-sm sm:text-base"/>
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full text-white z-20 mr-2 sm:mr-4 md:mr-8"
                >
                    <FaChevronRight className="text-sm sm:text-base"/>
                </button>

                <div className="flex">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${currentIndex * slideWidth}%)`,
                            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
                        }}
                    >
                        {duplicatedSuites.map((suite, index) => (
                            <div key={`${suite.id}-${index}`}
                                className="flex-shrink-0"
                                style={{ width: `${slideWidth}%` }}
                            >
                                <img
                                    src={suite.image}
                                    alt="Moonlit Resort Experience"
                                    className="w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] shadow object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    );
}