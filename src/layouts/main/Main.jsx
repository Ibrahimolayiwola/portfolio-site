import React from "react";
import Style from "./Main.module.css";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Rating from "../../components/rating/Rating";
import Service from "../../components/service/Service";
import MySkills from "../../components/mySkills/MySkills";
import profilePic from "../../assets/myProfilePic.png"

const Main = () => {
  return (
    <main>
      <div className={Style.about_container} >
      <div className={Style.about_wrapper} id="#home">
        <span>-Hello 'I am</span>
        <h1>
          Azeez Ibrahim <br /> Olayiwola
        </h1>
        <h2>software developer</h2>
        <p>
          Welcome to my software developer portfolio! I'm dedicated to building
          cutting-edge 
          software solutions that make a difference. With a focus on innovation
          and quality, I bring ideas to life through code. Let's create
          something remarkable together.
        </p>
        <button className={Style.btn}>Hire me &nbsp; &gt;</button>
        <div className={Style.icon_wrapper}>
          <span>follow me on:</span>
          <div>
            <a href="#">
              <LiaLinkedinIn className={Style.icon} />
            </a>
            <a href="#">
              <FaXTwitter className={Style.icon} />
            </a>
            <a href="#">
              <AiFillInstagram className={Style.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={Style.image_wrapper}>
        <img src={profilePic} alt="profile pic" />
      </div>
      </div>
      <Rating />
      <Service  />
      <MySkills />
    </main>
  );
};

export default Main;
