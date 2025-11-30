import { FaCar, FaClock, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Information() {

    const services = [
        { id: 1, title: "Cuisine", description: "Seasonal, Regional, Mediterranean", icon: FaCoffee },
        { id: 2, title: "Dietary Habits & Allergies", description: "Vegetarian, Vegan, Lactose-free, Gluten-free", icon: FaTshirt },
        { id: 3, title: "Serving", description: "Breakfast, Lunch, Dinner", icon: FaUserTie },
    ];

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col space-y-6">


                        <div className="relative ">
                            {/* Main Image */}
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/spa.avif"
                                    alt="Restaurant Interior"
                                    className="w-[900px] h-[450px] object-cover shadow-xl brightness-70"
                                />

                            </div>
                        </div>
                    </div>

                    {/* RIGHT TEXT SECTION */}
                    <div className="flex flex-col space-y-6 mt-2 ml-10">

                        <span className="text-left text-sm md:text-md font-medium text-[#ba9d75] uppercase">
                            SOOTHE YOUR SOUL
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] mb-10 uppercase">
                            SPA TREATMENT
                        </h3>
                        <p className="text-left text-sm md:text-lg font-normal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        <ul  className="list-disc marker:text-[#ba9d75] text-black pl-6 text-left py-6 ">
                            <li>Massage, Body Treatment & Facial Treatment</li>
                            <li>Two Saunas & One Steam bath</li>
                            <li>Bio- and Finnish saunas</li>
                        </ul>
                        </p>

                        <button  className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-normal hover:bg-[#ab916c] ">
                            Request Information
                        </button>


                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">


                    {/* LEFT IMAGES */}
                    <div className="flex flex-col space-y-6 py-24 ">
                        <span className="text-left text-sm md:text-md font-medium text-[#ba9d75] uppercase ">
                            KEEP UP YOUR HEALTHY ROUTINE
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b]  uppercase py-4">
                            Personal Training & Movement
                        </h3>
                        <p className="text-left text-sm md:text-lg font-normnal">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <div className="text-left space-y-2 text-black py-4">
                            <h1 className=" text-2xl font-normal">Opening Hours</h1>

                            <div className="flex items-center gap-2 mt-4 font-normal">

                                <FaClock className="text-[#ba9d75]" />
                                <span>7:00 am - 9:00 pm</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock className="text-[#ba9d75]" />
                                <span>10:00 am - 9:00 pm</span>
                            </div>
                        </div>


                        <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-normal hover:bg-[#ab916c] ">
                            Request Information
                        </button>


                    </div>





                    <div className="flex flex-col space-y-6 mt-10">
                        <div className="relative ">
                            {/* Main Image */}
                            <div className="relative z-10 -ml-1">
                                <img
                                    src="/images/fitness2.avif"
                                    alt="Restaurant Interior"
                                    className="w-[900px] h-[650px] object-cover shadow-xl brightness-70"
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
