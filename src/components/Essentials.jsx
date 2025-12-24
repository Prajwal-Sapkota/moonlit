import { FaBuilding, FaCar, FaCoffee, FaGlassMartiniAlt, FaShieldAlt, FaSpa, FaSwimmingPool, FaTree, FaTshirt, FaUserTie, FaUtensils, FaWifi } from "react-icons/fa";

export default function Essentials() {
    const services = [
        { id: 1, title: "Airport Pick-up Service", description: "Complimentary transfers from nearby airports to our serene jungle resort location.", icon: FaCar },
        { id: 2, title: "High-speed Wi-Fi", description: "High-speed internet available throughout the entire resort for seamless connectivity.", icon: FaWifi },
        { id: 3, title: "Breakfast in Bed", description: "Wake up to gourmet breakfast served in your room with scenic jungle or river views.", icon: FaCoffee },
        { id: 4, title: "Multilingual Professional Staff", description: "Professionally trained, multilingual staff providing international standard service.", icon: FaUserTie },
        { id: 5, title: "Laundry Services", description: "Professional laundry and dry-cleaning services available for all guests.", icon: FaTshirt },
        { id: 6, title: "Outdoor Swimming Pool", description: "Relax by our scenic outdoor swimming pool with refreshing cocktails and light bites.", icon: FaSwimmingPool },
        { id: 7, title: "24-hour Security", description: "Comprehensive 24-hour security with CCTV surveillance ensuring a peaceful and secure environment.", icon: FaShieldAlt },
        { id: 8, title: "Spacious Landscaped Gardens", description: "Expansive landscaped gardens perfect for relaxation, events, and enjoying nature.", icon: FaTree },
        { id: 9, title: "Conference & Event Facilities", description: "4,800 sq. ft. multi-purpose hall with modern audiovisual support for MICE events.", icon: FaBuilding },
        { id: 10, title: "Wellness Sanctuary", description: "Luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy facilities.", icon: FaSpa },
        { id: 11, title: "All Day Dining Restaurant", description: "International cuisines and local specialties served in indoor & outdoor seating.", icon: FaUtensils },
        { id: 12, title: "Pool Bar", description: "Refreshing cocktails, mocktails, and light snacks in a scenic open-air setting by the pool.", icon: FaGlassMartiniAlt },
    ];

    // Split services into two groups of 6
    const firstSixServices = services.slice(0, 6);
    const lastSixServices = services.slice(6, 12);

    return (
        <div className="w-full bg-white py-18">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                {/* FIRST SECTION: Text on Left, Images on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">

                    {/* Left Column - Text (First 6 services) */}
                    <div className="flex flex-col space-y-6">
                        <span className="text-left text-md md:text-lg font-medium text-[#51A687]">
                            DISCOVER OUR PREMIUM AMENITIES
                        </span>
                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] mb-10">
                            RESORT FACILITIES
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {firstSixServices.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#51A687] mt-1" size={42} />
                                        <div>
                                            <h3 className="text-left text-xl font-normal text-[#1b1c1b]">{service.title}</h3>
                                            <p className="text-left font-normal text-[#1b1c1b]">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="flex flex-col space-y-6 py-2 lg:py-12">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Top Left Image */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[450px]">
                                    <img
                                        src="/images/jungle1.avif"
                                        alt="Jungle Safari Adventure"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Top Right Image */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[400px] mt-6">
                                    <img
                                        src="/images/spa1.avif"
                                        alt="Wellness & Spa Retreat"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            
                        </div>
                    </div>

                </div>

                {/* SECOND SECTION: Images on Left, Text on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left Column - Images (Different images for variety) */}
                    <div className="flex flex-col space-y-6 py-2 lg:py-12">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Top Left Image */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[450px]">
                                    <img
                                        src="/images/pool.avif"
                                        alt="Outdoor Swimming Pool"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Top Right Image */}
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[400px] mt-6">
                                    <img
                                        src="/images/conference.jpeg"
                                        alt="Conference Facilities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    {/* Right Column - Text (Last 6 services) */}
                    <div className="flex flex-col space-y-6">
                       
                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] mb-10">
                            PREMIUM SERVICES
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {lastSixServices.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#51A687] mt-1" size={42} />
                                        <div>
                                            <h3 className="text-left text-xl font-normal text-[#1b1c1b]">{service.title}</h3>
                                            <p className="text-left font-normal text-[#1b1c1b]">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}