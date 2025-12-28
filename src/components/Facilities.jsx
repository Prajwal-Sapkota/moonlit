import { FaBuilding, FaShieldAlt, FaSpa, FaSwimmingPool, FaTree, FaUtensils } from "react-icons/fa";

export default function Facilities() {
    const services = [
        { id: 1, title: "24-hour Security", description: "Comprehensive 24-hour security with CCTV surveillance ensuring a peaceful and secure environment.", icon: FaShieldAlt },
        { id: 2, title: "Spacious Landscaped Gardens", description: "Expansive landscaped gardens perfect for relaxation, events, and enjoying nature.", icon: FaTree },
        { id: 3, title: "Conference & Event Facilities", description: "4,800 sq. ft. multi-purpose hall with modern audiovisual support for MICE events.", icon: FaBuilding },
        { id: 4, title: "Wellness Sanctuary", description: "Luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy facilities.", icon: FaSpa },
        { id: 5, title: "All Day Dining Restaurant", description: "International cuisines and local specialties served in indoor & outdoor seating.", icon: FaUtensils },
        { id: 6, title: "Outdoor Swimming Pool", description: "Relax by our scenic outdoor swimming pool with refreshing cocktails and light bites.", icon: FaSwimmingPool },
    ];

    return (
        <div className="w-full bg-white py-4 sm:py-8 md:py-12 lg:py-18">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">

                    {/* LEFT CONTENT SECTION */}
                    <div className="flex flex-col">
                        <span className="text-left text-sm sm:text-md md:text-lg font-medium text-[#55694f]">
                            DISCOVER OUR PREMIUM AMENITIES
                        </span>
                        <h3 className="text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-[#1b1c1b] leading-tight mt-1 sm:mt-2 md:py-6">
                            RESORT FACILITIES
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                                        <IconComponent className="text-[#55694f] mt-1 flex-shrink-0" size={28} />
                                        <div>
                                            <h3 className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#1b1c1b]">
                                                {service.title}
                                            </h3>
                                            <p className="text-left font-normal text-[#1b1c1b] text-xs sm:text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT IMAGES SECTION - Stacked on mobile, side-by-side on larger screens */}
                    <div className="flex flex-col py-1 sm:py-6">
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6">
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[180px] sm:h-[220px] md:h-[320px] lg:h-[480px] xl:h-[500px]">
                                    <img
                                        src="/images/jungle1.avif"
                                        alt="Jungle Safari Adventure"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="group cursor-pointer mt-4 sm:mt-2 md:mt-4 lg:mt-6">
                                <div className="relative overflow-hidden h-[180px] sm:h-[200px] md:h-[300px] lg:h-[420px] xl:h-[450px]">
                                    <img
                                        src="/images/spa1.avif"
                                        alt="Wellness & Spa Retreat"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}