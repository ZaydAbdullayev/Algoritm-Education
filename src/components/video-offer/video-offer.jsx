import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video-offer.css";


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

  const video_url = "fcry0C0hlQg";

  const video_data = [
    video_url,
    video_url,
    video_url,
    video_url,
    video_url,
    video_url,
  ];

  return (
    <div className="slider_container" data-aos="zoom-in-up">
      <h2>VIDEO LAVXALAR</h2>
      <Slider {...settings} className="slider_box">
        {video_data.map((url, index) => {
          return (
            <div className="item item_v" key={index}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${url}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
