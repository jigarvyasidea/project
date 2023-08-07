import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSlider.css'; // Import your custom CSS file for styling

// Array of videos
const videos = [
  'https://www.youtube.com/embed/i_R1mSIYFyo',
  'https://www.youtube.com/embed/BV8_qTIdHpk', 
  // Add more video URLs as needed
];

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two videos at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Display one video on mobile
        },
      },
    ],
  };

  return (
    <div className="video-slider-container">
   
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className={`video-slide ${index === 0 ? 'video-slide-left' : 'video-slide-right'}`}>
            <iframe
              width="100%"
              height="100%"
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
