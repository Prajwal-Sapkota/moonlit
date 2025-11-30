import React from "react";

const activities = [
    { id: 1, title: "Winter Hiking", image: "/images/res1.avif", category: "OUTDOORS" },
    { id: 2, title: "Golf Courses", image: "/images/res2.avif", category: "OUTDOORS" },
    { id: 3, title: "Paraglider Exercises", image: "/images/res3.avif", category: "OUTDOORS" },
    { id: 4, title: "Ski & Snowshoeing", image: "/images/res4.avif", category: "OUTDOORS" },
];

const Holiday = () => {
    return (
        <div className="min-h-screen bg-white py-12 sm:py-16 px-4">
            <div className="text-center  max-w-3xl mx-auto">
                <span className="text-sm sm:text-md font-medium text-[#bda17b]">ENJOY ULTIMATE ALPINE EXPERIENCES</span>
                <h3 className="text-4xl sm:text-4xl lg:text-6xl font-normal text-[#1b1c1b] py-10">YOUR HOLIDAY PARADISE</h3>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={`relative overflow-hidden shadow-lg group ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500`}
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-72 sm:h-80 md:h-120 object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                        <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white text-black py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm font-normal">
                            $180 / PERSON
                        </span>

                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white py-4 px-2">
                            <p className=" text-left text-[9px] sm:text-xs font-normal tracking-wider  ">{activity.category}</p>
                            <p className="text-lg sm:text-xl font-normal py-2 ">{activity.title}</p>
                            <a className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 hover:opacity-80 cursor-pointer">
                                DISCOVER TRIP <span>›</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Holiday;
