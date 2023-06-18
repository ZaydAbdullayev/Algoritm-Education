import React, { useEffect, useState } from "react";
import "./home.css";
import { Corusel } from "../../components/home-corusel/corusel";
import { Contact } from "../../components/contact/contact";
import { TeacherCorusel } from "../../components/teacher-corusel/teacherCorusel";
import { Question } from "../../components/question/question";
import { VideoOffer } from "../../components/video-offer/video-offer";
import { AlgoritmMap } from "../../components/algotirmsMap/algoritmMap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../redux/loading";
// import Skeleton from "react-loading-skeleton";

const base_url = process.env.REACT_APP_BASE_URL;
export const Home = () => {
  const dispatch = useDispatch();
  const [categori, setCategori] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(acLoading(true));

    const url = `${base_url}/categories`;
    axios(url)
      .then((res) => {
        setCategori(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(acLoading(false));
        // setLoading(false);
      });
  }, [dispatch]);

  // const categori_skeleton = [0, 0, 0, 0];

  return (
    <div className="home_container">
      <div className="home_page">
        {/* =========== Main Slider of Algoritm ========== */}
        <Corusel />

        {/* ============ About Algoritm's course ========== */}
        <div className="course_info_box" data-aos="zoom-in-up">
          <p>algoritm ta'limda siz</p>
          {categori.map((item) => {
            return (
              <div
                className="course_info_item"
                data-aos="zoom-in-up"
                key={item.id}
              >
                <p>{item.categoryName}</p>
                <p>{item.description}</p>
                <span>{item.background}</span>
              </div>
            );
          })}
        </div>

        {/* ============ Conatct us section ========== */}
        <Contact />

        {/* ===========  Slider of th about Teacher's ========== */}
        <TeacherCorusel />

        {/* =========== Send Question section  ========== */}
        <Question />

        {/* =========== Offer video  section  ========== */}
        <VideoOffer />

        {/* =========== Algoritm's map from google map  ========== */}
        <AlgoritmMap />
      </div>
    </div>
  );
};
