import { useRef, useEffect } from "react";

export default function Experience() {
    const rightImageRef = useRef(null);
    const leftImageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate right image first
                        if (rightImageRef.current) {
                            rightImageRef.current.classList.remove('opacity-0');
                            rightImageRef.current.classList.add('opacity-100');
                        }
                        // Animate left image with delay
                        setTimeout(() => {
                            if (leftImageRef.current) {
                                leftImageRef.current.classList.remove('opacity-0');
                                leftImageRef.current.classList.add('opacity-100');
                            }
                        }, 200);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const imageContainer = rightImageRef.current?.parentElement?.parentElement;
        if (imageContainer) {
            observer.observe(imageContainer);
        }

        return () => {
            if (imageContainer) {
                observer.unobserve(imageContainer);
            }
        };
    }, []);

    return (
        <div className="w-full bg-white py-8 sm:py-12">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24">

                    {/* TEXT SECTION */}
                    <div className="flex flex-col space-y-3 sm:space-y-4 ">
                        <span className="text-left text-sm sm:text-md md:text-lg font-medium text-[#55694f]">
                            SEEKING A TRULY PEACEFUL EXPERIENCE
                        </span>
                        <h3 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#1b1c1b] py-2 sm:py-4">
                            UNWIND UNDER THE MOONLIT JUNGLE SKY
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl font-normal text-[#1b1c1b] text-justify leading-relaxed">
                            Nestled in a peaceful and serene natural setting near Chitwan National Park, Moonlit Resort offers an unforgettable blend of nature, comfort, culture, and professional hospitality. Managed by well-known hospitality veterans with international chain experience, we combine global service standards with authentic Nepali warmth for thoughtfully curated experiences under the moonlit sky, perfect for leisure travel, destination weddings, corporate retreats, and wellness escapes.
                        </p>
                        <button className="bg-transparent text-black border border-[#ba9d75] w-full sm:w-54 font-normal py-3 px-6 hover:bg-[#ab916c] hover:text-white transition-colors cursor-pointer mt-2 sm:mt-0 text-sm sm:text-base">
                            Discover Experiences
                        </button>
                    </div>

                    {/* IMAGES SECTION - Normal images on mobile, no overlap */}
                    <div className="flex flex-col ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {/* First image */}
                            <div 
                                ref={rightImageRef}
                                className="group cursor-pointer transition-all duration-500 sm:duration-700 ease-out opacity-0"
                            >
                                <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                                    <img
                                        src="/images/riverside.avif"
                                        alt="Rapti River Experience"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Second image */}
                            <div 
                                ref={leftImageRef}
                                className="group cursor-pointer transition-all duration-500 sm:duration-700 ease-out opacity-0 mt-0 sm:mt-8 md:mt-12 lg:mt-8"
                            >
                                <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[360px] lg:h-[440px]">
                                    <img
                                        src="/images/about2.jpeg"
                                        alt="Kerung Stream Setting"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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