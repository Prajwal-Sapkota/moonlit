import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Comfortable = () => {
  const facilities = [
    "High Quality Bed",
    "Air Conditioning",
    "Flat Screen TV",
    "Mini Bar",
    "Bathroom with Shower",
    "Refrigerator",
    "Spa Flip Flops",
    "Dining Table",
    "Bathrobes",
    "Laundry",
    "Espresso Machine",
    "Safety Deposit Box",
    "Free WiFi",
    "24-Hour Security",
    "Furnished Balcony"
  ];

  return (
    <div className=" bg-[#1a1a1a] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-left py-10">
            <div>
              <span className=" text-md md:text-md font-medium  text-[#ba9d75] ">
                COMFORTABLE STAY EXPERIENCE
              </span>

              <h3 className="  text-3xl md:text-4xl font-normal py-6">
                MOST POPULAR FACILITIES
              </h3>

              <p className=" leading-relaxed mb-8 text-gray-200 font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>

              {/* More About Services Button */}
              <div className="flex justify-start">
                <button  className="text-lg font-light inline-flex items-center group">
                  <button  className="border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all font-normal">
                    More About Services
                  </button>
                  
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Facilities List */}
          <div className=" p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3"
                >
                  <div className="text-[#ba9d75] mr-3 font-light text-lg group-hover:scale-110 transition-transform">
                    +
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors font-normal">
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
