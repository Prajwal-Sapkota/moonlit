import Footer from "../components/Footer";
import Book from "./Restaurant/Book";
import Checkout from "./Restaurant/Checkout";
import Culinary from "./Restaurant/Culinary";
import Experience from "./Restaurant/Experience";
import Hero from "./Restaurant/Hero";




function Restaurant() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Experience/>
        <Culinary/>
        <Book/>
        <Checkout/>
        
       
        <Footer/>

      </div> 
    </>

  );
}

export default Restaurant;