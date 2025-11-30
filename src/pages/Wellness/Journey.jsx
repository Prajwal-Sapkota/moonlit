import React from "react";
import { FaDumbbell, FaHotTub, FaSpa } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";

const activities = [
    { id: 1, title: "Facial & Skincare", image: "/images/facial.avif", icon: <FaSpa /> },
    { id: 2, title: "Aromatherapy", image: "/images/aromatherapy.avif", icon: <GiPerfumeBottle /> },
    { id: 3, title: "Spa & Sauna", image: "/images/sauna.avif", icon: <FaHotTub /> },
    { id: 4, title: "Fitness Center", image: "/images/fitness.avif", icon: <FaDumbbell /> },
];

const Journey = () => {
    return (
        <div className=" bg-[#121212] py-24  px-4">
            <div className="text-center  max-w-3xl mx-auto">
                <span className="text-sm sm:text-md font-normal text-[#bda17b] ">ENJOY YOUR WELLNESS</span>
                <h3 className="text-3xl sm:text-3xl lg:text-4xl font-normal text-white uppercase py-8">Everything you need to bring energy, body and spirit into balance</h3>
                <p className="text-md sm:text-md font-normal text-white ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={`relative overflow-hidden shadow-lg group ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500 mt-10`}
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-72 sm:h-80 md:h-120 object-cover  
                            "
                        />

                        <div className="absolute inset-0  bg-black/40"></div>


                        <div className="absolute bottom-2 w-full flex flex-col items-center text-center text-white">
                            <h1 className="text-3xl sm:text-xl md:text-6xl font-light tracking-wider mb-5 text-[#ba9d75]">
                                {activity.icon}
                            </h1>
                            <h3 className="text-xl sm:text-xl md:text-2xl font-normal mb-10">
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
