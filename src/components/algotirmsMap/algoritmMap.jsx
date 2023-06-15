import React from "react";
import "./algoritmMap.css";

export const AlgoritmMap = () => {
  return (
    <div
      className="map_box"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-offset="180"
    >
      <h3>BIZNING MANZILIMIZ</h3>
      <iframe
        className="map_item"
        title="This is Algoritm's map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2259504206972!2d71.67385386149665!3d40.99842745144557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dcdcddeff89%3A0xe8a56e035fc982ef!2sAlgoritm%20EDU!5e0!3m2!1str!2s!4v1685940968763!5m2!1str!2s"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="feature-policy; ch-ua-form-factor 'none'"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-offset="200"
      ></iframe>
      <div
        className="contact_us"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-offset="150"
      >
        <p>
          It's a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className="our_number">
          <a href="tel:+998191111111">
            +998(19) 111 11 11 <p className="wiggle"></p>
          </a>
          <a href="tel:+998191111111">
            +998(19) 111 11 11 <p className="wiggle"></p>
          </a>
        </div>
      </div>
    </div>
  );
};
