import React from 'react';

const DropDine = () => {
    const diningOptions = [
        { id: 1, title: "Fine Dining Restaurant", image: "/images/res1.avif" },
        { id: 2, title: "Bar & Lounge", image: "/images/res2.avif" },
        { id: 3, title: "Room Service", image: "/images/res3.avif" },
        { id: 4, title: "Coffee Shop", image: "/images/res4.avif" }
    ];

    return (
        <div 
            className="w-full bg-black py-8 "
            onMouseEnter={(e) => e.stopPropagation()} // Prevent event bubbling
        >
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8">
                    {diningOptions.map((option) => (
                        <div key={option.id} className="group cursor-pointer flex flex-col items-center">
                            <div className="relative overflow-hidden h-56 w-48 mb-3">
                                <img 
                                    src={option.image} 
                                    alt={option.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>
                            </div>
                            
                            <span className="text-white font-semibold text-sm transition-colors text-center ">
                                {option.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DropDine;
