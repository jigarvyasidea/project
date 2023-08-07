import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import './TeamSlider.css';
import img1 from "../Team SLider/img/DSC_2258.jpg";

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Change this to 1 to show one slide at a time in desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide in mobile
        },
      },
    ],
  };

  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, []);

  const teamMembers = [
    { id: 1, name: 'John Doe', image: img1 }, // Use img1 as the image path
    { id: 2, name: 'Jane Smith', image: img1 }, // Use img1 as the image path
    // Add more team members here with their respective image paths
  ];

  return (
    <div className="slider-container">
         <h1 className="team-heading">Meet Our Team</h1>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img
              src={member.image}
              alt={member.name}
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div className="member-name">{member.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
