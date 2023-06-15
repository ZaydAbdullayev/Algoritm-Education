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
  const teacher = [
    {
      id: 1,
      fullname: "Karomatxon Q.",
      skills: "ingliz tili",
      img: slide_img4,
    },
    {
      id: 2,
      fullname: "Karomatxon Q.",
      skills: "web dasturlash",
      img: slide_img5,
    },
    {
      id: 3,
      fullname: "Abdusattor R.",
      skills: "rus tili",
      img: slide_img6,
    },
    {
      id: 4,
      fullname: "Karomatxon Q.",
      skills: "DTM",
      img: slide_img7,
    },
    {
      id: 5,
      fullname: "Karomatxon Q.",
      skills: "ingliz tili",
      img: slide_img4,
    },
    {
      id: 6,
      fullname: "Karomatxon Q.",
      skills: "web development",
      img: slide_img5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <div
      className="slider_container"
      data-aos="fade-up"
      data-aos-duration="7000"
      data-aos-offset="180"
    >
      <h2>TAJRIBALI USTOZLARIMIZ</h2>

      <Slider {...settings} className="slider_box">
        {teacher.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.img} alt="foto" />
              <div className="teacher_info">
                <p>{item.fullname}</p>
                <span>{item.skills}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
