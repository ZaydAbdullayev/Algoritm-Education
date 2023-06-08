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
    <div className="question_box">
      <h3>SAVOLLARINGIZGA JAVOB BERISHDAN MAMNUNMIZ</h3>
      <form className="question_form" onSubmit={handleSubmit}>
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
        />
        <button className="send_btn send">HABARNI YUBORISH</button>
      </form>
    </div>
  );
});
