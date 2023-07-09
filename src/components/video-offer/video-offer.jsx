import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video-offer.css";
import { ApiGetService } from "../../service/api.service";

export const VideoOffer = () => {
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    document.cookie = "third_party_var=value; SameSite=None; Secure";
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    ApiGetService.fetching("get/videos")
      .then((res) => {
        setVideoData(res?.data?.data);
      })
      .catch((err) => {
        setError(err.message || "An error occurred");
      });
  };

  return (
    <div className="slider_container" data-aos="zoom-in-up">
      <h2>VIDEO LAVXALAR</h2>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <Slider {...settings} className="slider_box">
          {videoData?.map((video) => {
            return (
              <div className="item item_v" key={video.id}>
                <iframe
                  src={video.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};
