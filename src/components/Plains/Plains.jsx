import React from "react";
import "./Plains.css";
import heart from "../../assets/heart.png";
import dumbell from "../../assets/dumbell.png";
import tick from "../../assets/tick.png";
import arrow from "../../assets/leftArrow.png";
import { plansData } from "../../data/plansData.js";

const Plains = () => {
  return (
    <div className="plains" id="plains">
      <div className="blur plains-blur"></div>
      <header>
        <div className="stroke-text">READY TO START</div>
        <div>YOUR JOURNEY</div>
        <div className="stroke-text">NOW WITHUS</div>
      </header>
      <div className="offers">
        {plansData.map((plain) => (
          <div className="plain">
            {plain.icon}
            <p>{plain.name}</p>
            <span className="price">$ {plain.price}</span>
            <div className="plain-features">
              <div>
                <img src={tick} />
                {plain.features[0]}
              </div>
              <div>
                <img src={tick} />
                {plain.features[1]}
              </div>
              <div>
                <img src={tick} />
                {plain.features[2]}
              </div>
            </div>
            <p>See More Benefits -&gt; </p>
            <button>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plains;
