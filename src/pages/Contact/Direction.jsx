export default function Direction() {
  const backgroundImageUrl = "/images/chitwannp.jpg";

  return (
    <div>
      {/* Direction Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-black text-center mb-6 md:mb-10 relative">

        {/* Vertical Divider */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#ba9d75]"></div>

        {/* Column 1 */}
        <div className="flex flex-col space-y-2 md:space-y-3 leading-relaxed items-center px-4 md:px-6 order-2 md:order-1">
          <span className="text-sm md:text-md font-medium text-[#55694f] uppercase">General Inquiries</span>
          <h3 className="text-xl md:text-2xl font-normal">Resort Information</h3>
          <p className="text-sm md:text-base">Business Hours: Daily, 24/7 Service Available</p>
          <p className="text-sm md:text-base">Telephone: +977 9804161233</p>
          <p className="text-sm md:text-base">Email: moonlitresort8@gmail.com</p>
          <p className="text-sm md:text-base">Address: Jagatpur, Dhrubaghat, Bharatpur-23, Chitwan</p>
          <p className="text-xs md:text-sm">Near Chitwan National Park</p>
          <button className="mt-3 md:mt-4 font-normal underline decoration-[#ba9d75] underline-offset-6 md:underline-offset-8 hover:no-underline transition-all duration-300 text-sm md:text-base">
            Get Directions
          </button>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2 md:space-y-3 leading-relaxed items-center px-4 md:px-6 order-1 md:order-2">
          <span className="text-sm md:text-md font-medium text-[#55694f] uppercase">Reservations & Events</span>
          <h3 className="text-xl md:text-2xl font-normal">Booking & Planning</h3>
          <p className="text-sm md:text-base">For Room Reservations & Accommodation</p>
          <p className="text-sm md:text-base">For Destination Weddings & Celebrations</p>
          <p className="text-sm md:text-base">For Conferences & MICE Events</p>
          <p className="text-sm md:text-base">For Wellness Retreats & Packages</p>
          <p className="text-sm md:text-base">Email: moonlitresort8@gmail.com</p>
          <button className="mt-3 md:mt-4 py-2 md:py-3 font-normal underline decoration-[#ba9d75] underline-offset-6 md:underline-offset-8 hover:no-underline transition-all duration-300 text-sm md:text-base">
            Plan Your Visit
          </button>
        </div>

      </div>

      {/* Full Cover Image with Darker Overlay */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px]">
        <img
          src={backgroundImageUrl}
          alt="Chitwan National Park Jungle View"
          className="w-full h-full object-cover"
        />
        {/* Darker Gradient Overlay for Jungle Theme */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </div>
  );
}