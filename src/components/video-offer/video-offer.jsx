import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video-offer.css";
import Skeleton from "react-loading-skeleton";

export const VideoOffer = () => {
  const [loading, setLoading] = useState(false);
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

  window.addEventListener("load", (e) => {
    setLoading(true);
  });

  const video_data = [
    "fcry0C0hlQg",
    "fcry0C0hlQg",
    "fcry0C0hlQg",
    "fcry0C0hlQg",
    "fcry0C0hlQg",
    "fcry0C0hlQg",
  ];

  const skeleton = [0, 0, 0];

  return (
    <div className="slider_container" data-aos="zoom-in-up">
      <h2>VIDEO LAVXALAR</h2>
      <Slider {...settings} className="slider_box">
        {!loading
          ? skeleton.map((index) => {
              return (
                <div className="item item_v" key={index}>
                  {<Skeleton width={"100%"} height={"100%"} />}
                </div>
              );
            })
          : video_data.map((url, index) => {
              return (
                <div className="item item_v" key={index}>
                  <iframe
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
