import React, { useState, useEffect } from "react";

const statsData = [
    { value: 80, description: "ELEGANT ROOMS" },
    { value: 4800, description: "SQ.FT EVENT HALL" },
    { value: 500, description: "WEDDING CAPACITY" },
    { value: 24, description: "HOUR SERVICE" },
];

export default function Stay() {
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
        const intervals = statsData.map((stat, index) => {
            const increment = Math.ceil(stat.value / 100);
            return setInterval(() => {
                setCounts((prev) => {
                    const newCounts = [...prev];
                    if (newCounts[index] < stat.value) {
                        newCounts[index] += increment;
                        if (newCounts[index] > stat.value) newCounts[index] = stat.value;
                    }
                    return newCounts;
                });
            }, 20);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <section
            className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-[96vh] w-full bg-cover bg-center flex items-center justify-center text-white py-12 sm:py-12 md:py-18"
            style={{ backgroundImage: "url('/images/book.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/60 sm:bg-black/70"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto">
                <span className="text-sm sm:text-md md:text-lg drop-shadow-md text-[#ba9d75] font-medium">
                    EXPERIENCE MOONLIT RESORT
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-snug py-4 sm:py-6 md:py-8 px-2">
                    Discover luxury accommodation in the heart of Chitwan               
                </h3>

                <div className="bg-transparent px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 w-full">
                    <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                            {statsData.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-1 sm:mb-2 drop-shadow-lg">
                                        {counts[index]}
                                    </h2>
                                    <span className="text-xs sm:text-sm md:text-sm text-white uppercase drop-shadow-lg font-medium leading-tight">
                                        {stat.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <button className="bg-transparent text-white border border-[#ba9d75] w-full sm:w-64 font-normal py-2 sm:py-3 px-6 hover:bg-[#ab916c] transition-colors cursor-pointer mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-4 text-sm sm:text-base">
                    Explore Accommodation
                </button>
            </div>
        </section>
    );
}