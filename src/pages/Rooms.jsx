import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Book from "./Rooms/Book";
import Comfortable from "./Rooms/Comfortable";

import Hero from "./Rooms/Hero";
import RoomsList from "./Rooms/RoomsList";
import Testimonial from "./Services/Testimonial";


function Rooms() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero />
        <RoomsList/>
        <Comfortable/>
        <Testimonial/>
       <Book/>
        
        <Footer/>

      </div> 
    </>

  );
}

export default Rooms;