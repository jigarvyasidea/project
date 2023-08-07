import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from "../slider/imgs/one.png"; // Change to default import without curly braces
import two from "../slider/imgs/two.png"; // Change to default import without curly braces
import three from "../slider/imgs/three.png"; // Change to default import without curly braces

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../slider/Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Sliders() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
     
        <SwiperSlide>
          <img src={one} alt="One" /> {/* Make sure to include an alt attribute for accessibility */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="Two" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="Three" />
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
