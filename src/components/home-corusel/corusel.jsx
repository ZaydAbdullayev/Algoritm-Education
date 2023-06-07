import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./corusel.css";

import slide_img1 from "../../assets/images/uber-head-office-meeting-room.jpg";
import slide_img2 from "../../assets/images/22db106e254fa3cea33535c40704d7be.jpg";
import slide_img3 from "../../assets/images/Unity-London-workplace-screens-meeting-room-1200x675.jpg";

export const Corusel = () => {
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
    responsive: [
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          dots: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{ marginBottom: "50px", height: "100px" }}
      >
        <ul
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            translate: "-50%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        className={index ? "dots" : "dots_active"}
        style={{
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="img_box">
          <img src={slide_img1} alt="foto" />
        </div>
        <div className="img_box">
          <img src={slide_img2} alt="foto" />
        </div>
        <div className="img_box">
          <img src={slide_img3} alt="foto" />
        </div>
        <div className="img_box">
          <img src={slide_img1} alt="foto" />
        </div>
        <div className="img_box">
          <img src={slide_img2} alt="foto" />
        </div>
        <div className="img_box">
          <img src={slide_img3} alt="foto" />
        </div>
      </Slider>
    </div>
  );
};
