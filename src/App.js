import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Events from "./components/projects/Projects";
import Sliders from "./components/slider/Sliders";
import Videoslid from "./components/VideoSlider/Videoslid";
import ProductSection from "./components/Product/ProductList";
import Testimonial from "./components/testimonial/Testimonial";
import TeamSlider from "./components/Team SLider/TeamSlider";
import VideoSlider from "./components/motivationvideo/VideoSlider";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="W-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
      </div>

      <div className="max-w-screen-xxl mx-auto">
        <Sliders />
      </div>

      <div className="max-w-screen-xl mx-auto sm:m-4">
        <Banner />
        <Features />
        <Events />
        <ProductSection />
        <Testimonial />
        <Videoslid />
        <TeamSlider/>
        <VideoSlider/>
        <Contact />
        <Footer />

        {showScrollButton && (
          <div
            className="fixed bottom-5 right-5 bg-primaryColor text-white p-2 rounded cursor-pointer"
            onClick={scrollToTop}
          >
            Scroll Up
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
