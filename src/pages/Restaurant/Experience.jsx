import { FaCoffee, FaUtensils, FaGlassMartiniAlt } from "react-icons/fa";

export default function Experience() {

    const services = [
        { id: 1, title: "All-Day Dining", description: "Breakfast, lunch & dinner with international & local flavors", icon: FaUtensils },
        { id: 2, title: "Diverse Menu", description: "International cuisines curated by experienced chefs", icon: FaCoffee },
        { id: 3, title: "Ambiance", description: "Indoor & outdoor seating with refined yet relaxed atmosphere", icon: FaGlassMartiniAlt },
    ];

    return (
        <div className="w-full bg-white py-8 sm:py-12 md:py-18">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col space-y-6 py-4 order-2 lg:order-1">
                       
                        {/* Desktop: Overlapping Layout */}
                        <div className="relative hidden lg:block">
                            {/* Main Image */}
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/res1.avif"
                                    alt="Moonlit Restaurant Interior"
                                    className="w-[350px] h-[500px] object-cover shadow-xl brightness-70"
                                />
                            </div>
                            
                            {/* Overlapping Image */}
                            <div className="absolute -bottom-20 -right-15 z-20 w-2/3">
                                <img
                                    src="/images/res2.avif"
                                    alt="Moonlit Dining Experience"
                                    className="w-[350px] h-[500px] object-cover shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Mobile / Tablet Layout → No overlap */}
                        <div className="flex flex-col gap-4 sm:gap-6 lg:hidden">
                            <img
                                src="/images/res1.avif"
                                alt="Moonlit Restaurant Interior"
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover shadow-lg"
                            />
                            <img
                                src="/images/res2.avif"
                                alt="Moonlit Dining Experience"
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover shadow-lg"
                            />
                        </div>
                    </div>

                    {/* RIGHT TEXT SECTION */}
                    <div className="flex flex-col space-y-4 sm:space-y-6 order-1 lg:order-2">

                        <span className="text-left text-sm sm:text-md md:text-lg font-medium text-[#55694f] uppercase">
                            Moonlit Resort Dining
                        </span>

                        <h3 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1b1c1b] uppercase">
                            Culinary Excellence at Moonlit Resort
                        </h3>
                        
                        <p className="text-left text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                            Our all-day dining restaurant offers a diverse menu of international cuisines, curated by experienced chefs, paired with a wide selection of beverages. Enjoy a culinary journey featuring international cuisines, local specialties, and carefully crafted beverages in a refined yet relaxed atmosphere. Whether it's breakfast, lunch, or dinner, we provide indoor and outdoor seating options with scenic views of our lush surroundings.
                        </p>

                        {/* SERVICES GRID */}
                        <div className="grid grid-cols-1 gap-4 sm:gap-6 py-2">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-3 sm:space-x-4">
                                        <IconComponent className="text-[#55694f] mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="text-left text-base sm:text-lg md:text-xl font-normal text-[#1b1c1b]">
                                                {service.title}
                                            </h3>
                                            <p className="text-left text-[#1b1c1b] font-normal text-xs sm:text-sm md:text-base">
                                                {service.description}
                                            </p>
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