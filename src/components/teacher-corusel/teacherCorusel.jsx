import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teacherCorusel.css";

import slide_img4 from "../../assets/images/woman1.jpg";
import slide_img5 from "../../assets/images/woman.jpg";
import slide_img6 from "../../assets/images/man2.jpg";
import slide_img7 from "../../assets/images/images.jpg";

export const TeacherCorusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
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
          dots: true,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <h2>TAJRIBALI USTOZALRIMIZ</h2>
      <Slider {...settings} className="slider_box">
        <div className="item">
          <img src={slide_img4} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
        <div className="item">
          <img src={slide_img5} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
        <div className="item">
          <img src={slide_img6} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
        <div className="item">
          <img src={slide_img7} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
        <div className="item">
          <img src={slide_img4} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
        <div className="item">
          <img src={slide_img5} alt="foto" />
          <div className="teacher_info">
            <p>Karomatxon Q.</p>
            <span>Ingliz tili</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};