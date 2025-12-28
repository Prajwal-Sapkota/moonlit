import React from "react";
import { FaBed, FaUser, FaBath, FaRulerCombined, FaChevronRight, FaClock } from "react-icons/fa";

const RoomsList = () => {
    const roomsData = [
        {
            id: 1,
            name: "Deluxe Garden View Room",
            size: "45 m²",
            view: "Garden View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            image: "/images/deluxe.jpeg",
            description: "Features private balcony with scenic garden views, elegant interiors with natural light, and premium bedding for ultimate comfort."
        },
        {
            id: 2,
            name: "River View Suite",
            size: "60 m²",
            view: "Rapti River View",
            guests: 4,
            beds: 2,
            bathrooms: 1,
            image: "/images/riverview.jpeg",
            description: "Spacious suite with panoramic views of the Rapti River, featuring private balcony and luxurious amenities for family stays."
        },
        {
            id: 3,
            name: "Kerung Stream Villa",
            size: "85 m²",
            view: "Stream & Jungle View",
            guests: 6,
            beds: 3,
            bathrooms: 2,
            image: "/images/kerung.jpeg",
            description: "Luxury villa adjacent to Kerung Stream with private garden, two bathrooms, and immersive jungle surroundings."
        },
        {
            id: 4,
            name: "Premium Jungle View Room",
            size: "40 m²",
            view: "Jungle Canopy View",
            guests: 2,
            beds: 1,
            bathrooms: 1,
            image: "/images/roomhero.jpg",
            description: "Room with breathtaking jungle canopy views, private balcony, and modern amenities for nature enthusiasts."
        },
        {
            id: 5,
            name: "Executive Suite",
            size: "70 m²",
            view: "Panoramic Jungle & River View",
            guests: 4,
            beds: 2,
            bathrooms: 2,
            image: "/images/executive.jpeg",
            description: "Executive suite combining luxury with nature, featuring dual views of jungle and river, premium furnishings."
        },
        {
            id: 6,
            name: "Presidential Villa",
            size: "120 m²",
            view: "360° Nature Views",
            guests: 8,
            beds: 4,
            bathrooms: 3,
            image: "/images/villa.jpeg",
            description: "Ultimate luxury villa with expansive living spaces, multiple balconies, and uninterrupted views of surrounding greenery."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                {/* Intro Content */}
                <div className="max-w-4xl text-center mb-8 sm:mb-10 md:mb-12 mx-auto">
                    <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f] uppercase">Luxury Accommodation</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-normal py-3 sm:py-4 md:py-6">
                        80 ELEGANT ROOMS & SUITES DESIGNED FOR COMFORT AND PRIVACY
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 font-normal leading-relaxed">
                        Moonlit Resort features 80 spacious rooms including Deluxe Rooms and Suites, all with private balconies, elegant interiors with natural light, high-speed Wi-Fi, modern amenities, premium bedding, and scenic views of gardens, streams, or surrounding greenery.
                    </p>
                    <span className="flex flex-col sm:flex-row justify-center items-center font-medium text-[#ba9d75] text-base sm:text-lg gap-4 sm:gap-15 py-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-sm" />
                            Check In: 2:00 PM
                        </div>

                        <span className="hidden sm:inline">|</span>
                        <span className="sm:hidden text-gray-400">——</span>

                        <div className="flex items-center gap-2">
                            <FaClock className="text-sm" />
                            Check Out: 12:00 PM
                        </div>
                    </span>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {roomsData.map((room) => (
                        <div key={room.id} className="w-full relative">
                            {/* Room Image with hover zoom */}
                            <div className="relative overflow-hidden group">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-[30rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            {/* Room Info */}
                            <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-6 md:space-y-8">
                                <h3 className="text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-900">
                                    {room.name}
                                </h3>

                                {/* Info with icons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-gray-600 text-sm sm:text-base md:text-lg">
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaRulerCombined className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaUser className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.guests} Guest{room.guests > 1 ? 's' : ''}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaBed className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.beds} {room.beds > 1 ? 'Double Beds' : 'King Bed'}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        <FaBath className="text-[#ba9d75] text-sm sm:text-base" />
                                        <span>{room.bathrooms} Bathroom{room.bathrooms > 1 ? 's' : ''}</span>
                                    </div>
                                </div>

                                <p className="text-left text-gray-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
                                    {room.description}
                                </p>

                                <div className="flex justify-start">
                                    <button className="text-sm sm:text-base md:text-lg text-black font-light inline-flex items-center group">
                                        <span className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                                            View Room Details
                                        </span>
                                        <span className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                                            <FaChevronRight className="text-sm sm:text-base" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsList;