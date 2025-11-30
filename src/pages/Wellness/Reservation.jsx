import { FaCar, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";
import { MdCall } from "react-icons/md";

export default function Reservation() {

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">


                    <div className="flex flex-col space-y-8 py-18">

                        <span className="text-left text-sm md:text-md font-medium text-[#ba9d75] uppercase ">
                            3,000-SQM Oasis for Wellness & Fitness
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b]  uppercase">
                            Wellness At CozyStay
                        </h3>
                        <p className="text-left text-sm md:text-lg font-normal">Get away from the hustle and bustle of everyday life and find total relaxation at our resort. Access to a wellness center of over 3,000 square meters including spa, sauna, swimming pool, gym, yoga and pilates classes and more. You’ll find everything you need, from a dedicated fitness studio to an extensive range of fitness equipment. All carefully planned to help you achieve a balance of energy, body and mind. </p>
                        <div className="flex items-start gap-6">
                            <MdCall className="text-5xl text-[#ba9d75] mt-1" />
                            <div className="space-y-2 text-left">
                                <span className="text-left text-sm font-medium text-[#ba9d75] uppercase tracking-widest">
                                    RESERVATION BY PHONE
                                </span>
                                <h1
                                    className="  text-2xl sm:text-3xl font-normal text-black hover:text-[#ba9d75] transition-colors duration-300 number"
                                >
                                    +41 22 345 66 77
                                </h1>
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col space-y-6">


                        <div className="relative hidden lg:block">
                            {/* Main Image */}
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/res1.avif"
                                    alt="Restaurant Interior"
                                    className="w-[350px] h-[500px] object-cover shadow-xl brightness-70"
                                />

                            </div>


                            {/* Overlapping Image */}
                            <div className="absolute -bottom-20 -right-15 z-20 w-2/3">
                                <img
                                    src="/images/res2.avif"
                                    alt="Exquisite Cuisine"
                                    className="w-[350px] h-[500px] object-cover shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Mobile / Tablet Layout → No overlap */}
                        <div className="flex flex-col gap-6 lg:hidden">
                            <img
                                src="/images/res1.avif"
                                alt="Restaurant Interior"
                                className="w-full h-[400px] object-cover shadow-xl"
                            />
                            <img
                                src="/images/res2.avif"
                                alt="Exquisite Cuisine"
                                className="w-full h-[400px] object-cover shadow-xl"
                            />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}
