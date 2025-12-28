import React from "react";

const activities = [
    { id: 1, title: "Luxury Spa Treatments", image: "/images/spa1.avif" },
    { id: 2, title: "Steam & Sauna", image: "/images/steam.avif" },
    { id: 3, title: "Jacuzzi Therapy", image: "/images/jacuzzi.avif" },
    { id: 4, title: "Ice Bath Therapy", image: "/images/icebath.avif" },
];

const Journey = () => {
    return (
        <div className="bg-[#55694f] py-12 md:py-18 px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm sm:text-md md:text-lg font-normal text-[#bda17b]">
                    MOONLIT WELLNESS SANCTUARY
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white uppercase py-6 md:py-8">
                    Holistic Rejuvenation for Body, Mind & Soul
                </h3>
                <p className="text-sm sm:text-md md:text-lg font-normal text-white px-2 sm:px-0">
                    Rejuvenate at our wellness facilities designed for complete relaxation and restoration. Perfect for wellness tourism guests, retreat groups, and individual travelers seeking holistic wellness experiences.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-6 md:py-8">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={`relative overflow-hidden shadow-lg group ${
                            index % 2 === 0 
                                ? "sm:-translate-y-2 md:-translate-y-4" 
                                : "sm:translate-y-2 md:translate-y-4"
                        } transition-transform duration-500 mt-6 sm:mt-8 md:mt-10`}
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-72 sm:h-80 md:h-84 lg:h-96 xl:h-120 object-cover group-hover:scale-105 transition-transform duration-600"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute inset-1 sm:inset-2 md:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                        <div className="absolute bottom-2 sm:bottom-4 w-full flex flex-col items-center text-center text-white px-2">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                                {activity.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;
 