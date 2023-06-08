import React, { memo } from "react";
import "./question.css";
import { PatternFormat } from "react-number-format";

export const Question = memo(() => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div
      className="question_box"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-offset="350"
    >
      <h3>SAVOLLARINGIZGA JAVOB BERISHDAN MAMNUNMIZ</h3>
      <form
        className="question_form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-offset="300"
      >
        <textarea
          name="question"
          id="question"
          cols="30"
          rows="10"
          placeholder="Savollaringizni kiriting"
          required
        ></textarea>
        <PatternFormat
          format="+998 ## ### ####"
          allowEmptyFormatting
          mask="_"
          name="phone"
          data-aos="fade-right"
          data-aos-duration="4000"
          data-aos-offset="200"
        />
        <button
          className="send_btn send"
          data-aos="fade-left"
          data-aos-duration="4000"
          data-aos-offset="200"
        >
          HABARNI YUBORISH
        </button>
      </form>
    </div>
  );
});
