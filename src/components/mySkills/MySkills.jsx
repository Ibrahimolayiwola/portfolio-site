import React from "react";
import Style from "./MySkills.module.css";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Svg from "../svg/Svg";

const MySkills = () => {

    const skills = [
       {icon:<IoLogoHtml5 />,name: 'Html 5' } ,
       {icon:<FaCss3Alt/>,name: 'Css 3' } ,
       {icon:<TbBrandJavascript />,name: 'Java script' } ,
       {icon:<IoLogoReact />,name: 'React Js' } ,
       {icon:<SiTailwindcss />,name: 'Tailwind Css' } ,
       {icon:<SiFirebase />,name: 'Firebase' } ,
       {icon:<FaGithub />,name: 'Git' } 
      ]

  return (
    <div className={Style.container}>
      <div>
        <h1>My Skills</h1>
        <p>
          Welcome to my software developer portfolio! I'm dedicated to building
          cutting-edge 
          software  solutions that make a difference. With a focus on  innovation
          and quality, I bring ideas to life through code. Let's create
          something remarkable together.
        </p>
      </div>
      <div className={Style.skill_container}>
        <span>-My Skills-</span>
        <div className={Style.skill_wrapper}>
          {
            skills.map(({icon, name}) => (
                <div>
                    <Svg icon={icon}/>
                    <p>{name}</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MySkills;
