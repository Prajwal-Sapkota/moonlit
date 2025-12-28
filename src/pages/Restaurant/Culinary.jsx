import { MdCall } from "react-icons/md";

export default function Culinary() {
    return (
        <div className="w-full bg-white pb-8 sm:py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    
                    {/* Left Column */}
                    <div className="text-left space-y-6 sm:space-y-8 lg:space-y-12 py-0 sm:py-6 lg:py-8 ">
                        
                        {/* Text Block */}
                        <div className="space-y-3 sm:space-y-4">
                            <span className="text-sm sm:text-md md:text-lg font-medium text-[#55694f] uppercase tracking-wider">
                                MOONLIT DINING EXPERIENCE
                            </span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1b1c1b] leading-tight py-2 sm:py-4">
                                ALL-DAY DINING & POOL BAR
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                                Enjoy a diverse menu of international cuisines curated by our experienced chefs, paired with a wide selection of beverages. Unwind by our outdoor swimming pool with refreshing cocktails, mocktails, and light snacks in a scenic open-air setting. Experience culinary excellence in both indoor and outdoor seating options, offering beautiful views of our lush gardens and tranquil streams.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="flex items-start gap-4 sm:gap-6 pt-2">
                            <MdCall className="text-3xl sm:text-4xl lg:text-5xl text-[#ba9d75] mt-1 flex-shrink-0" />
                            <div className="space-y-1 sm:space-y-2">
                                <span className="text-left text-xs sm:text-sm font-normal text-[#ba9d75] uppercase tracking-wider">
                                    RESERVATION BY PHONE
                                </span>
                                <h1
                                    className="text-left text-xl sm:text-2xl lg:text-3xl font-normal text-black hover:text-[#ba9d75] transition-colors duration-300 number"
                                >
                                    +977 9804161233
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 ">
                        
                        {/* Image 1 */}
                        <div className="relative group h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res3.avif"
                                alt="Moonlit Restaurant Menu"
                                className="w-full h-full object-cover transition duration-500 sm:duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                            />

                            {/* Overlay With Opacity */}
                            <div className="absolute inset-0 bg-black opacity-15 group-hover:opacity-20 sm:group-hover:opacity-30 transition-all duration-500 sm:duration-700"></div>

                            {/* Inner Border */}
                            <div className="absolute inset-1 sm:inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Menu Text Inside */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                                <span className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide">
                                    Menu
                                </span>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative group h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res4.avif"
                                alt="Moonlit Beverage Selection"
                                className="w-full h-full object-cover transition duration-500 sm:duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-15 group-hover:opacity-20 sm:group-hover:opacity-30 transition-all duration-500 sm:duration-700"></div>

                            {/* Inner Gold Border */}
                            <div className="absolute inset-1 sm:inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Beverage List Inside */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                                <span className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide">
                                    Beverage List
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}