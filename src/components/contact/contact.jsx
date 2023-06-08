import React, { memo, useState } from "react";
import "./contact.css";
import { PatternFormat } from "react-number-format";
import { useSnackbar } from "notistack";

export const Contact = memo(() => {
  const [message, setMessage] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const sendMessage = () => {
    setMessage(!message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    document.querySelector("form").reset();
    setMessage(false);
    const msg =
      " Habar muvoffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!!!";
    enqueueSnackbar(msg, { variant: "default" });
  };

  return (
    <div
      className="contact_box"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-offset="200"
    >
      <p>BATAFSIL MA'LUMOT OLISH OCHUN BIZ BILAN BOG'LANIG</p>
      <button
        onClick={sendMessage}
        className="send_btn"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-offset="200"
      >
        BOG'LANISH
      </button>
      <form
        className={message ? "form open_form" : "form"}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Ismingiz ?"
          required
          autoCapitalize="off"
          autoComplete="off"
          className={message ? "first_ac" : "first"}
        />
        <PatternFormat
          format="+998 ## ### ####"
          allowEmptyFormatting
          required
          mask="_"
          name="phone"
          className={message ? "second_ac" : "second"}
        />
        <button className={message ? " btn btn_ac phone" : "btn phone"}>
          Bog'lanish
        </button>
      </form>
    </div>
  );
});
