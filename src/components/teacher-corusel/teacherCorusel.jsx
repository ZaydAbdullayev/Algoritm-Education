import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teacherCorusel.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { acLoading } from "../../redux/loading";
import { useDispatch, useSelector } from "react-redux";

const base_url = process.env.REACT_APP_BASE_URL;
export const TeacherCorusel = () => {
  const [teacher, setTeacher] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${base_url}/get/teachers`)
      .then((res) => {
        setTeacher(res?.data?.data);
        // const img = JSON.parse(res?.data?.data[0].img);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  // const img = JSON.parse(teacher);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    gap: 10 + "px",
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

  const skeleton = [
    {
      id: "ertyhjd",
      name: "0",
    },
    {
      id: "jcvbnh",
      name: "0",
    },
    {
      id: "kjhbv",
      name: "0",
    },
    {
      id: "jbhgfygy",
      name: "0",
    },
  ];

  return (
    <div className="slider_container" data-aos="zoom-in-up">
      <h2>TAJRIBALI USTOZLARIMIZ</h2>

      <Slider {...settings} className="slider_box">
        {loading
          ? skeleton.map((index) => {
              return (
                <div className="item" key={index}>
                  {<Skeleton width={"100%"} height={"100%"} />}
                </div>
              );
            })
          : teacher?.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <img src={item.img || <Skeleton />} alt="teacher_foto" />
                  <div className="teacher_info">
                    <p>{item.fullname || <Skeleton />}</p>
                    <span>{item.subject || <Skeleton />}</span>
                  </div>
                </div>
              );
            })}
      </Slider>
    </div>
  );
};
