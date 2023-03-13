import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import arrow from "../../assets/leftArrow.png";
import { useState, useRef } from "react";

const Testimonials = () => {
  const [person, setPerson] = useState(testimonialsData[0]);
  const count = useRef(0);
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-testimonials">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <p>{person.review}</p>
        <div>
          <span style={{ color: "var(--orange)" }} className="name">
            {person.name}{" "}
          </span>
          -<span className="name"> {person.status}</span>
        </div>
      </div>
      <div className="right-testimonials">
        <div className="picture-container">
          <div>
            <img src={person.image} />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="arrows">
          <img
            onClick={() => {
              if (count.current == 0) count.current = 3;
              setPerson(() => testimonialsData[--count.current]);
            }}
            src={arrow}
          />
          <img
            onClick={() => {
              if (count.current == 2) count.current = -1;
              setPerson(() => testimonialsData[++count.current]);
            }}
            src={arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
