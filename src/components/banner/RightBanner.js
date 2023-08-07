import React, { useState, useEffect } from 'react';
import { bannerImg1, bannerImg2, bannerImg3 } from "../../assets/index";
import AOS from 'aos';
import 'aos/dist/aos.css';

const RightBanner = () => {
  const images = [bannerImg1, bannerImg2, bannerImg3 ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init();

    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative" data-aos="fade-up">
        <img
          className='w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10'
          src={images[currentImageIndex]}
          alt={`bannerImg${currentImageIndex + 1}`}
        />
        <div className="absolute bottom-0 w-[250px] h-[200px] lgl:w-[400px] lgl:h-[420px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </>
  );
}

export default RightBanner;
