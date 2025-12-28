import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-18 px-4 sm:px-6 lg:px-8 mb-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-stretch">
                    {/* Left Side - Big Image */}
                    <div className="relative lg:w-[120%] max-w-none order-2 lg:order-1">
                        <img
                            src="/images/contact.avif"
                            alt="Moonlit Resort Contact"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[700px] object-cover shadow-lg"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>


                    {/* Right Side - Content and Form */}
                    <div className="flex flex-col justify-center lg:ml-20 order-1 lg:order-2">
                        {/* Header Section */}
                        <div className="mb-6 sm:mb-8">
                            <span className="text-sm sm:text-md md:text-lg text-[#55694f] font-medium uppercase tracking-wider">
                                CONTACT MOONLIT RESORT
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black uppercase py-4 sm:py-6">
                                PLAN YOUR JUNGLE RETREAT
                            </h2>
                            <div className="space-y-2">
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                                    Get in touch with our hospitality team to discuss your stay, 
                                    inquire about destination weddings, corporate retreats, 
                                    or wellness packages at our luxury jungle resort.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            {/* Name Field */}
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors text-sm sm:text-base"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors text-sm sm:text-base"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#ba9d75] focus:border-[#ba9d75] transition-colors resize-vertical text-sm sm:text-base"
                                    placeholder="Tell us about your stay: room preferences, event plans, or wellness interests"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#ba9d75] text-white px-6 sm:px-12 py-3 sm:py-4 font-normal uppercase tracking-wider hover:bg-[#ab916c] transition-colors duration-300 border border-[#ba9d75] w-full text-sm sm:text-base"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;