import { FaCar, FaCarAlt, FaConciergeBell, FaDumbbell, FaSpa, FaSwimmingPool, FaTshirt, FaUsers, FaUserTie, FaUtensils, FaWifi } from "react-icons/fa";

export default function Amenities() {
    const services = [
        { id: 1, title: "Airport Pick-up", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaCar },
        { id: 2, title: "Housekeeper", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaUserTie },
        { id: 3, title: "Wifi & Internet", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaWifi },
        { id: 4, title: "Laundry Services", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaTshirt },
        { id: 5, title: "Private Car Park", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaCarAlt },
        { id: 6, title: "Fitness Center", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaDumbbell },
        { id: 7, title: "Private Chef", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaUtensils },
        { id: 8, title: "Infinity Pool", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaSwimmingPool },
        { id: 9, title: "Wellness Center", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaSpa },
        { id: 10, title: "Room Service", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaConciergeBell },
        { id: 11, title: "Conciergerie Service", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaConciergeBell },
        { id: 12, title: "Dedicated Team", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaUsers },
    ];

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-8 text-black">


                <div className="flex flex-col space-y-6 ">
                    <span className="text-sm md:text-md font-medium text-[#ba9d75]">
                        AMENITIES AND SERVICES
                    </span>
                    <h3 className=" text-4xl md:text-5xl font-normal text-[#1b1c1b] py-4">
                        DISCOVER THE SERVICES WE OFFERED
                    </h3>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-8">
                        {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <div key={service.id} className="flex items-start space-x-8 bg-gray-100 px-4 py-4">
                                    <IconComponent className="text-[#ba9f79] mt-1" size={48} />
                                    <div>
                                        <h3 className=" text-left text-xl font-normal text-[#1b1c1b]">{service.title}</h3>
                                        <p className="text-left text-[#1b1c1b] font-normal">{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
}