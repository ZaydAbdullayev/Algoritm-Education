import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./corusel.css";

import slide_img1 from "../../assets/images/uber-head-office-meeting-room.jpg";
import slide_img2 from "../../assets/images/22db106e254fa3cea33535c40704d7be.jpg";
import slide_img3 from "../../assets/images/Unity-London-workplace-screens-meeting-room-1200x675.jpg";

export const Corusel = () => {
  const images = [
    slide_img1,
    slide_img2,
    slide_img3,
    slide_img1,
    slide_img2,
    slide_img3,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    appendDots: (dots) => (
      <div style={{ marginBottom: "50px" }}>
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div className="img_box" key={index}>
              <img src={img} alt="foto" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
