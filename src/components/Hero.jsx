import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Stats from './Stats';

const Hero = () => {
    const backgroundImageUrl = "/images/heroimg5.avif";
    
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateText(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-50">
                    <Navigation />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
                    <div className={`text-center w-full mt-20 transition-transform duration-700 ease-out ${
                        animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <span className="text-md md:text-sm lg:text-md font-medium tracking-wide mb-6">
                            BOUTIQUE RESORT OFFERING TIMELESS EUROPEAN LUXURY
                        </span>
                        <h3 className="text-2xl md:text-3xl lg:text-7xl font-normal  tracking-wider">
                            BOUTIQUE RESORT IN THE HEART OF SWISS ALPS
                        </h3>
                    </div>
                </div>

                <Stats />
            </div>
        </div>
    );
};

export default Hero;
