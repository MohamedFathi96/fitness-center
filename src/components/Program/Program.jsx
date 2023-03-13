import React from "react";
import "./Program.css";
import flame from "../../assets/flame.svg";
import { programsData } from "../../data/programsData.js";
import rightArrow from "../../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="program" id="program">
      <header>
        <div className="stroke-text">EXPLORE OUR</div>
        <div>PROGRAMS</div>
        <div className="stroke-text">
          TO<>&nbsp;</>SHAPE YOU
        </div>
      </header>
      <div className="program-content">
        {programsData.map((program) => (
          <div>
            {program.image}
            <p>{program.heading}</p>
            <p>{program.details}</p>
            <p className="join-now">
              <span>Join Now</span> <img src={rightArrow} alt="" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
