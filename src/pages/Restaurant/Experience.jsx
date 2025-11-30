import { FaCar, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Experience() {

    const services = [
        { id: 1, title: "Cuisine", description: "Seasonal, Regional, Mediterranean", icon: FaCoffee },
        { id: 2, title: "Dietary Habits & Allergies", description: "Vegetarian, Vegan, Lactose-free, Gluten-free", icon: FaTshirt },
        { id: 3, title: "Serving", description: "Breakfast, Lunch, Dinner", icon: FaUserTie },
    ];

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* LEFT IMAGES */}
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

                    {/* RIGHT TEXT SECTION */}
                    <div className="flex flex-col space-y-6 ">

                        <span className="text-left text-sm md:text-md font-medium text-[#ba9d75] uppercase">
                            Perfect Fine Dine Experiences
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b]  uppercase ">
                            Experience exquisite cuisine at The Restaurant
                        </h3>
                        <p className="text-left text-sm md:text-lg font-normal">We are committed to create wonderful memories for all guests with every stay. Carefully curated menus incorporate locally sourced ingredients into exquisite dishes that reflect the locals and the world around them. Wherever you are in the world, we’ll take your taste buds on a journey they’ll never forget. Authentic flavors and culinary skills combine to create an unforgettable dining experience. </p>

                        {/* NEW DATA IN GRID */}
                        <div className="grid grid-cols-1 gap-6 py-2">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#ba9f79] mt-1" size={28} />
                                        <div>
                                            <h3 className="text-left text-xl font-normal text-[#1b1c1b]">
                                                {service.title}
                                            </h3>
                                            <p className="text-left text-[#1b1c1b] font-normal">
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
