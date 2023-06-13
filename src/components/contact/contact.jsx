import React, { memo, useState } from "react";
import "./contact.css";
import { PatternFormat } from "react-number-format";
import { useSnackbar } from "notistack";
import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;
export const Contact = memo(() => {
  const [message, setMessage] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const sendMessage = () => {
    setMessage((prevMessage) => !prevMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.phone = data?.phone?.split(" ")?.join("");

    const config = {
      method: "post",
      url: `${base_url}/send/message`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    try {
      const res = await axios(config);
      console.log(res?.data?.message);
      const msg =
        " Habar muvoffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!!!";
      enqueueSnackbar(msg, { variant: "default" });
    } catch (err) {
      console.log(err);
    }

    e.target.reset();
    setMessage(false);
  };

  return (
    <div
      className="contact_box"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-offset="180"
    >
      <p>BATAFSIL MA'LUMOT OLISH OCHUN BIZ BILAN BOG'LANIG</p>
      <button
        onClick={sendMessage}
        className="send_btn"
        data-aos="fade-up"
        data-aos-duration="7000"
        data-aos-offset="180"
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
          placeholder="Ismingiz?"
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
        <button className={message ? "btn btn_ac phone" : "btn phone"}>
          Bog'lanish
        </button>
      </form>
    </div>
  );
});
