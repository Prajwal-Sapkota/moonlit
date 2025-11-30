import { MdCall } from "react-icons/md";

export default function Culinary() {
    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left Column */}
                    <div className=" text-left space-y-12 py-12">
                        
                        {/* Text Block */}
                        <div className="space-y-4">
                            <span className=" text-sm font-medium text-[#ba9d75] uppercase tracking-widest">
                                CURATED CULINARY EXPERIENCES
                            </span>
                            <h3 className="text-4xl md:text-5xl font-normal text-[#1b1c1b] leading-tight py-4">
                                INDULGE YOUR SENSES AND DISCOVER NEW FLAVORS
                            </h3>
                            <p className=" text-lg text-gray-600 leading-relaxed font-normal">
                                The experienced chefs creates international specialties with unique flavors.
                                Relax with gourmet cuisine and signature cocktails enhanced by beautiful music and
                                stunning city views. From seasonal menus to diverse dining experiences,
                                see what our chefs are preparing for you.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="flex items-start gap-6">
                            <MdCall className="text-5xl text-[#ba9d75] mt-1" />
                            <div className="space-y-2">
                                <span className=" text-left text-sm font-normal text-[#ba9d75] uppercase tracking-widest">
                                    RESERVATION BY PHONE
                                </span>
                                <h1
                                    className=" text-left text-2xl sm:text-3xl font-normal text-black hover:text-[#ba9d75] transition-colors duration-300 number"
                                >
                                    +41 22 345 66 77
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Image 1 */}
                        <div className="relative group h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res3.avif"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 border border-[#ba9d75]"
                            />

                            {/* Overlay With Opacity */}
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            {/* Inner Border */}
                            <div className="absolute inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Menu Text Inside */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white mb-2">
                                <span className="text-3xl font-normal tracking-wide">
                                    Menu
                                </span>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative group h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res4.avif"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            {/* Inner Gold Border */}
                            <div className="absolute inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Wine List Inside */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white mb-2">
                                <span className="text-3xl font-light tracking-wide font-normal">
                                    Wine List
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
