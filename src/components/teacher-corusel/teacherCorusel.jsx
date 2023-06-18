import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teacherCorusel.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { acLoading } from "../../redux/loading";
import { useDispatch } from "react-redux";

const base_url = process.env.REACT_APP_BASE_URL;
export const TeacherCorusel = () => {
  const [teacher, setTeacher] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${base_url}/get/teachers`;
    dispatch(acLoading(true));
    axios(url)
      .then((res) => {
        setTeacher(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  console.log(teacher);

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

  const img = <Skeleton />;
  return (
    <div className="slider_container" data-aos="zoom-in-up">
      <h2>TAJRIBALI USTOZLARIMIZ</h2>

      <Slider {...settings} className="slider_box">
        {teacher?.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={img} alt="teacher_foto" />
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
