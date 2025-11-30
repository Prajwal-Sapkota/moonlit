
export default function Experience() {
    

    return (
        <div className="w-full bg-white py-15 ">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">

                    <div className="flex flex-col space-y-6 py-20">
                        <span className="text-left text-sm md:text-md font-medium text-[#ba9d75]">
                            SEEKING A TRULY PEACEFUL EXPERIENCE
                        </span>
                        <h3 className=" text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] py-4">
                            INDULGE, ESCAPE & RELEAX IN THE MOUNTAINS
                        </h3>
                        <p className=" text-left text-xl md:text-xl font-normal text-[#1b1c1b] ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        </p>
                        <button  className="bg-transparent text-black border border-[#ba9d75] w-48 font-normal py-3 px-6  hover:bg-[#ab916c] hover:text-white transition-colors cursor-pointer">
                            Discover More
                        </button>
                        

                        
                    </div>

                     <div className="flex flex-col ">

                        <div className="grid grid-cols-2 gap-6">

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[480px]">
                                    <img
                                        src="/images/mountain.avif"
                                        alt="Winter Activities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[420px] mt-6">
                                    <img
                                        src="/images/lakeview.avif"
                                        alt="Summer Activities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}