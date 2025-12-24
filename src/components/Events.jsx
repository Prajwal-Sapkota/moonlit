import React from 'react';
import { FaArrowRight, FaUsers, FaCalendarAlt, FaGlassCheers } from 'react-icons/fa';

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Destination Weddings",
            description: "From elegant destination weddings to grand local celebrations, Moonlit Resort offers expansive venues and expert planning support. Our team ensures seamless execution and unforgettable moments.",
            icon: FaGlassCheers,
            capacity: "Up to 500 guests",
            link: "#",
            image: "/images/wedding.avif"
        },
        {
            id: 2,
            title: "Conference & MICE",
            description: "Ideal destination for residential conferences, corporate meetings, and MICE events. Features include 4,800 sq. ft. multi-purpose hall, board meeting rooms, and modern audiovisual support.",
            icon: FaUsers,
            capacity: "4,800 sq. ft. hall",
            link: "#",
            image: "/images/conference1.jpeg"
        },
        {
            id: 3,
            title: "Social Celebrations",
            description: "Perfect for banquets, AGMs, birthdays, and private celebrations. With vast indoor and outdoor spaces, our professional events team ensures flawless execution from planning to celebration.",
            icon: FaCalendarAlt,
            capacity: "Custom packages",
            link: "#",
            image: "/images/celebrations.jpeg"
        }
    ];

    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto ">
                
                <div className="text-center py-4">
                    <span className="text-md md:text-lg font-medium text-[#51A687]  tracking-widest">
                        PREMIUM EVENTS & CELEBRATIONS
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1b1c1b] max-w-3xl mx-auto leading-snug fony-normal py-4">
                        ELEGANT VENUES FOR UNFORGETTABLE MOMENTS
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {events.map((event, index) => {
                        
                        const staggerClass =
                            index % 2 === 0
                                ? "md:-translate-y-8"
                                : "md:translate-y-8";

                        return (
                            <div
                                key={event.id}
                                className={`transition duration-300 py-8 ${staggerClass}`}
                            >
                                <div className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] group">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 border-2 border-[#ba9d75] pointer-events-none opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:inset-3"></div>
                                </div>

                                <div className=" text-center px-2 py-6 ">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <event.icon className="text-[#51A687]" size={24} />
                                        <span className="text-4xl font-normal text-[#1b1c1b] py-2">
                                            {event.title}
                                        </span>
                                    </div>

                                    <p className="text-[#1b1c1b] leading-relaxed font-normal py-4">
                                        {event.description}
                                    </p>

                                    <div className="mb-4">
                                        <span className="inline-block  text-[#51A687] text-sm font-medium px-3 py-1 rounded">
                                            {event.capacity}
                                        </span>
                                    </div>

                                    <button 
                                        className="inline-flex items-center gap-2 text-[#1b1c1b] font-normal hover:text-[#51A687] transition-colors duration-300 cursor-pointer"
                                    >
                                        Plan Your Event
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Events;