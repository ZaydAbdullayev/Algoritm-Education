import React from "react";
import "./home.css";
import { Corusel } from "../../components/home-corusel/corusel";
import { Contact } from "../../components/contact/contact";
import { TeacherCorusel } from "../../components/teacher-corusel/teacherCorusel";
import { Question } from "../../components/question/question";
import { VideoOffer } from "../../components/video-offer/video-offer";
import { AlgoritmMap } from "../../components/algotirmsMap/algoritmMap";

export const Home = () => {
  return (
    <div className="home_container">
      <div className="home_page">
        {/* =========== Main Slider of Algoritm ========== */}
        <Corusel />

        {/* ============ About Algoritm's course ========== */}
        <div
          className="course_info_box"
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-offset="200"
        >
          <p>algoritm ta'limda siz</p>
          <div
            className="course_info_item"
            data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-offset="200"
          >
            <p>web dasturlash</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quis autem. Vel recusandae, nihil consequuntur pariatur maxime
              excepturi fugit et eos esse aliquam commodi quos corrupti quidem,
              sed labore deleniti.
            </p>
            <span>{"</>"}</span>
          </div>
          <div
            className="course_info_item"
            data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-offset="200"
          >
            <p>ingliz tili</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quis autem. Vel recusandae, nihil consequuntur pariatur maxime
              excepturi fugit et eos esse aliquam commodi quos corrupti quidem,
              sed labore deleniti.
            </p>
            <span>EN</span>
          </div>
          <div
            className="course_info_item"
            data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-offset="200"
          >
            <p>rus tili</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quis autem. Vel recusandae, nihil consequuntur pariatur maxime
              excepturi fugit et eos esse aliquam commodi quos corrupti quidem,
              sed labore deleniti.
            </p>
            <span>RU</span>
          </div>
          <div
            className="course_info_item"
            data-aos="fade-up"
            data-aos-duration="4000"
            data-aos-offset="200"
          >
            <p>dtm</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quis autem. Vel recusandae, nihil consequuntur pariatur maxime
              excepturi fugit et eos esse aliquam commodi quos corrupti quidem,
              sed labore deleniti.
            </p>
            <span>DTM</span>
          </div>
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
