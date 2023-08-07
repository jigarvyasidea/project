import React from 'react';
import Slider from 'react-slick';
import './VideoSlider.css';

const VideoSlider = () => {
  const videos = [
    'https://youtube.com/shorts/cxAI2ccOiPA?feature=share',
    'https://youtube.com/shorts/yuXJPLo-fwU?feature=share',
    'https://youtube.com/shorts/HE6YtiucrR8?feature=share',
    'https://youtu.be/8jLmB2I0Ml4',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 videos on PC
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 video on mobile
        },
      },
    ],
  };

  return (
    <div className="video-slider">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <iframe
              src={video}
              title={`video-${index}`}
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
