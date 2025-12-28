import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Comfortable = () => {
  const facilities = [
    "Private Balcony with Nature Views",
    "Premium Bedding & Comfort",
    "High-speed Internet Access",
    "Modern Bathroom Amenities",
    "Mini Bar & Refreshments",
    "Flat Screen Television",
    "Air Conditioning Control",
    "Safety Deposit Box",
    "In-room Dining Service",
    "Daily Housekeeping",
    "Concierge Assistance",
    "Room Service 24/7",
    "Wake-up Call Service",
    "Luggage Storage",
    "Express Check-in/out"
  ];

  return (
    <div className="bg-[#55694f] py-8 sm:py-12 md:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">

          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-left py-8 sm:py-16 md:py-24">
            <div>
              <span className="text-sm sm:text-md md:text-lg font-medium text-[#ba9d75]">
                ROOM HIGHLIGHTS & FACILITIES
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal py-3 sm:py-4 md:py-6">
                PREMIUM AMENITIES FOR YOUR COMFORT
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8 text-gray-200 font-normal">
                Every room at Moonlit Resort is equipped with thoughtful amenities designed to ensure your complete comfort and convenience throughout your jungle retreat. From modern conveniences to personalized services, we prioritize your relaxation.
              </p>

              {/* More About Services Button */}
              <div className="flex justify-start">
                <button className="text-sm sm:text-base md:text-lg font-light inline-flex items-center group">
                  <span className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                    Book Your Stay
                  </span>
                  <span className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                    <FaChevronRight className="text-sm sm:text-base" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Facilities List */}
          <div className="p-2">
            <div className="grid grid-cols-2 gap-1 sm:gap-2">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 sm:p-3 group cursor-pointer"
                >
                  <div className="text-[#ba9d75] mr-2 sm:mr-3 font-light text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    +
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors font-normal text-xs sm:text-sm leading-tight">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Comfortable;