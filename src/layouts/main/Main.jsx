import React from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import Style from './Main.module.css';
// import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Service from "../../components/service/Service";
import MySkills from "../../components/skills/Skills";
import profilePic from "../../assets/myProfilePic1.png";
import Projects from "../../components/project/Projects";
import {motion} from 'framer-motion'
import { imageVariants, textVariants } from "../../animation/variants";

const Main = () => {
  return (
    <main>
      <div className={Style.about_container}>
        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .75}}
        className={Style.about_wrapper} id="#home">
          <span>-Hello 'I am</span>
          <h1>
            Azeez Ibrahim <br /> Olayiwola
          </h1>
          <h2>software developer</h2>
          <p>
            Welcome to my software developer portfolio! I'm dedicated to
            building cutting-edge software solutions that make a difference.
            With a focus on innovation and quality, I bring ideas to life
            through code. Let's create something remarkable together.
          </p>
          <button className={Style.btn}>
            <a
              href="https://docs.google.com/document/d/1yDXcNsklHqdUNKGbaSmO9VbDcjefE4BWqr8SnsmtdiM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé &nbsp; &gt;
            </a>
          </button>

          <div className={Style.icon_wrapper}>
            <span>follow me on:</span>
            <div>
              <a
                href="https://www.linkedin.com/in/ibrahim-olayiwola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn className={Style.icon} />
              </a>
              <a
                href="https://www.x.com/Highbee_Codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className={Style.icon} />
              </a>
              <a
                href="https://github.com/Ibrahimolayiwola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={Style.icon} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={imageVariants}
        initial='initial'
        animate='animate'
        className={Style.image_wrapper}>
          <img src={profilePic} alt="profile pic" width={450} height={450} className="w-full h-full object-cover"/>
        </motion.div>
      </div>
      {/* <Rating /> */}
      <Service />
      <MySkills />
      <Projects />
    </main>
  );
};

export default Main;
