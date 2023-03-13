import React from "react";
import "./Reasons.css";
import reason1 from "../../assets/image1.png";
import reason2 from "../../assets/image2.png";
import reason3 from "../../assets/image3.png";
import reason4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="why-us">
      <div className="left-reason">
        <img src={reason1} alt="reason" />
        <img src={reason2} alt="reason" />
        <img src={reason3} alt="reason" />
        <img src={reason4} alt="reason" />
      </div>
      <div className="right-reason">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY</span> CHOOSE US?
        </div>
        <ul>
          <li>
            <img src={tick} />
            OVER 140+ EXPERT COACHS
          </li>
          <li>
            <img src={tick} />
            TRAIN SMARTER AND FASTER THAN BEFORE
          </li>
          <li>
            <img src={tick} />1 FREE PROGRAM FOR NEW MEMBER
          </li>
          <li>
            <img src={tick} />
            RELIABLE PARTNERS
          </li>
        </ul>
        <span className="partiners">OUR PARTINERS</span>
        <div className="reasons-image">
          <img src={nb} alt="reason image" />
          <img src={adidas} alt="reason image" />
          <img src={nike} alt="reason image" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
