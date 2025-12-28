import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Pool = () => {
    const [playVideo, setPlayVideo] = useState(false);

    const videoId = "e9FTSxxFIH0";
    const thumbnail = "/images/pool.avif";

    return (
        <div className="w-full bg-white py-12 md:py-18">
            <div className="text-left space-y-4 md:space-y-2 px-4 sm:px-6 lg:px-30">
                <span className="text-xs sm:text-sm md:text-lg font-medium tracking-wider text-[#55694f]">
                    OUTDOOR SWIMMING POOL & BAR
                </span>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
                    <h3 className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-[#1b1c1b] leading-relaxed uppercase pt-2 md:pt-4">
                        Relax by our outdoor pool with scenic views
                    </h3>
                    <p className="text-left text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#1b1c1b] leading-relaxed -mt-4 md:mt-6">
                        Unwind by our outdoor swimming pool with refreshing cocktails, mocktails, and light snacks in a scenic open-air setting. Enjoy the peaceful natural surroundings near the Rapti River and Kerung Stream.
                    </p>
                </div>

                <div className="relative pt-4 sm:pt-6 md:pt-8 lg:py-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden">
                            <div className="relative pb-[56.25%] md:pb-[50%] h-0">
                                {playVideo ? (
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="Moonlit Resort Outdoor Pool & Bar"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div
                                        className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                                        onClick={() => setPlayVideo(true)}
                                    >
                                        <img
                                            src={thumbnail}
                                            alt="Moonlit Resort Outdoor Swimming Pool"
                                            className="w-full h-full object-cover transition-transform duration-500"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/20 sm:bg-black/30 opacity-0 group-hover:opacity-40 sm:group-hover:opacity-60 transition-opacity duration-500"></div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-transparent rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex items-center justify-center transition-transform transform border border-white">
                                                <FaPlay className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pool;