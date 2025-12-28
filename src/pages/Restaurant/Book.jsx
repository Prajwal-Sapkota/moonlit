import { FaUserTie } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdRestaurant } from "react-icons/md";

export default function Book() {

    const info = [
        { id: 1, icon: FaUserTie, title: "Dress Code", value: "Refined Yet Relaxed" },
        { id: 2, icon: MdRestaurant, title: "Reservation", value: "Call +977 9804161233" },
        { id: 3, icon: IoTime, title: "Opening Hours", value: "All-day dining: 6:00 AM - 11:00 PM" },
    ];

    return (
        <div className="relative w-full h-[420px] sm:h-[450px] md:h-[450px] text-white">

            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/table.avif')" }}
            />

            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black/50 sm:bg-black/60"></div>

            {/* CONTENT */}
            <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8 md:space-y-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-30 place-items-center w-full">

                    {info.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 px-2">
                                <Icon className="text-3xl sm:text-4xl md:text-5xl text-[#ba9d75]" />
                                <h3 className="uppercase tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-white text-center">
                                    {item.title}
                                </h3>
                                <p className="text-white/90 text-xs sm:text-sm md:text-md font-normal text-center">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}

                </div>

                <button className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal border-b border-[#ba9d75] hover:border-transparent transition-all duration-300 py-1">
                    Book Your Table
                </button>

            </div>
        </div>
    );
}