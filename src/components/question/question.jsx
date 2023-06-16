import React, { memo } from "react";
import "./question.css";
import { PatternFormat } from "react-number-format";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { acLoading } from "../../redux/loading";

export const Question = memo(() => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(acLoading(true));
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(acLoading(false));
    const msg =
      "Habar muvoffaqiyatli yuborildi tez orada siz bilan bog'lanamiz!";
    enqueueSnackbar(msg, { variant: "default" });
  };

  return (
    <div
      className="question_box"
      data-aos="fade-up"
      data-aos-duration="7000"
      data-aos-offset="180"
    >
      <h3>SAVOLLARINGIZGA JAVOB BERISHDAN MAMNUNMIZ</h3>
      <form
        className="question_form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-duration="7000"
        data-aos-offset="180"
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
          data-aos-duration="7000"
          data-aos-offset="170"
        />
        <button
          className="send_btn send"
          data-aos="fade-left"
          data-aos-duration="7000"
          data-aos-offset="170"
        >
          HABARNI YUBORISH
        </button>
      </form>
    </div>
  );
});
