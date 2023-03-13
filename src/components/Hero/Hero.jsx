import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div className="animation"></div>
          <p>THE BEST FITNESS CLUB IN THE TOWN</p>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <h1>
            <span className="stroke-text">SHAPE</span> YOUR <br />
            IDEAL BODY
          </h1>
          <p>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>
          <div className="hero-boxes">
            <div>
              <h2>+220</h2>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <h2>+220</h2>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <h2>+220</h2>
              <span>FITNESS PROGRAMS</span>
            </div>
            <div>
              <h2>+220</h2>
              <span>last</span>
            </div>
          </div>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <p>Heart Rate</p>
          <h3>116 bpm</h3>
        </div>
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
