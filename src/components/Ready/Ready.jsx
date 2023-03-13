import React from "react";
import "./Ready.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Ready = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jd446m",
        "template_kzka3ni",
        form.current,
        "KLW7JDyMi86iCvGwX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="ready">
      <hr />
      <div className="left-ready">
        <div>
          <span className="stroke-text">READY TO </span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-ready">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Enter Your Email Address Here"
            name="user-email"
          />
          <button>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Ready;
