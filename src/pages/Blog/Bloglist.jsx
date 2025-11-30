import React from "react";
import { FaChevronRight } from "react-icons/fa";

const BlogList = () => {
    const newsData = [
        {
            category: "News",
            subCategory: "Sightseeing",
            title: "Alpine scenery in summer",
            image: "/images/summer.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Apr 19",
        },
        {
            category: "Dining",
            subCategory: "News",
            title: "New chef and spring special menu",
            image: "/images/res1.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Apr 15",
        },
        {
            category: "News",
            subCategory: "Wellness",
            title: "Mountain trail and fitness centre",
            image: "/images/mountain.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Mar 25",
        },
        {
            category: "Dining",
            subCategory: "News",
            title: "Introducing new restaurants",
            image: "/images/res2.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Mar 12",
        },
        {
            category: "News",
            subCategory: "Wellness",
            title: "Hot stone bath is back",
            image: "/images/wellness.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Mar 10",
        },
        {
            category: "News",
            subCategory: "Sightseeing",
            title: "Discover the picturesque mountain scenery",
            image: "/images/lakeview.avif",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur …",
            date: "Mar 8",
        }
    ];

    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {newsData.map((news) => {
                        const [month, day] = news.date.split(" "); // Split "Apr 19" into ["Apr", "19"]

                        return (
                            <div className="w-full relative" key={news.title}>
                                {/* Image with hover effect */}
                                <div className="relative overflow-hidden group py-4">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-64 lg:h-[24rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    {/* Date Badge */}
                                    <div className="absolute top-2 left-2 bg-white/70 text-black px-4 py-2 flex flex-col items-center">
                                        <span className="text-md uppercase font-normal">{month}</span>
                                        <span className="text-4xl font-normal">{day}</span>
                                    </div>
                                </div>

                                {/* Room Info */}
                                <div className="space-y-4 text-left">
                                    <span className=" text-md font-medium text-[#ba9d75] uppercase">
                                        {news.category}.{news.subCategory}
                                    </span>
                                    <h3 className=" text-3xl font-normal text-gray-900 py-2">
                                        {news.title}
                                    </h3>
                                    <p className=" text-gray-700 text-md font-normal">{news.description}</p>
                                    <div className="justify-start text-lg text-black font-normal inline-flex items-center group py-4">
                                        <button className="inline-flex items-center gap-1 border-b-2 border-[#ba9d75] group-hover:border-transparent transition-all">
                                            Read More
                                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                                <FaChevronRight />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
