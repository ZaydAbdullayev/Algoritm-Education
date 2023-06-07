import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video-offer.css";
import { Link } from "react-router-dom";

import slide_img4 from "../../assets/images/woman1.jpg";
import slide_img5 from "../../assets/images/woman.jpg";
import slide_img6 from "../../assets/images/man2.jpg";
import slide_img7 from "../../assets/images/images.jpg";

export const VideoOffer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider_container">
      <h2>VIDEO LAVXALAR</h2>
      <Slider {...settings} className="slider_box">
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img4} alt="alt" />
          <div className="icon">▶</div>
        </Link>
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img5} alt="alt" />
          <div className="icon">▶</div>
        </Link>
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img6} alt="alt" />
          <div className="icon">▶</div>
        </Link>
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img7} alt="alt" />
          <div className="icon">▶</div>
        </Link>
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img4} alt="alt" />
          <div className="icon">▶</div>
        </Link>
        <Link to="/" target="_blank" className="item item_v">
          <img src={slide_img5} alt="alt" />
          <div className="icon">▶</div>
        </Link>
      </Slider>
    </div>
  );
};