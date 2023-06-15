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

  return (
    <div
      className="slider_container"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-offset="180"
    >
      <h2>VIDEO LAVXALAR</h2>
      <Slider {...settings} className="slider_box">
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="item item_v">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fcry0C0hlQg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Slider>
    </div>
  );
};
