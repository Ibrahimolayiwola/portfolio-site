import React from "react";
import Style from "./skills.module.css";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Svg from "../svg/Svg";
import {motion} from 'framer-motion'
import { cardVariants, textVariants } from "../../animation/variants";

const MySkills = () => {

    const experience = [
      {
        date: 'Nov 14 - present',
        position: 'Frontend Developer',
        company: 'JHI Initiative',
        role: 'As a frontend developer at Jimoh Habibullah Initiative, I focused on creating a user-friendly website that showcases the commendable work of the organization. '
      }
    ]

    const skills = [
       {icon:<IoLogoHtml5 />,name: 'Html 5' } ,
       {icon:<FaCss3Alt/>,name: 'Css 3' } ,
       {icon:<AiOutlineJavaScript />,name: 'Java script' } ,
       {icon:<IoLogoReact />,name: 'React Js' } ,
       {icon:<SiTailwindcss />,name: 'Tailwind Css' } ,
       {icon:<SiFirebase />,name: 'Firebase' } ,
       {icon:<FaGithub />,name: 'Git' } 
      ]

  return (
    <div className={Style.container}>
      <motion.div
      variants={textVariants}
      initial='initial'
      whileInView='animate'
      viewport={{once: true}}
      className={Style.experience_container} >
        <h1>Experience</h1>
         {
          experience.map(({date, position, company, role}, i) => (
            <div className={Style.experience} key={i}>
              <p>{date}</p>
              <p>{position}</p>
              <span>{company}</span>
              <p>{role}</p>
            </div>
          ) )
         }
      </motion.div>
      <div className={Style.skill_container}>
        <span>-Skills-</span>
        <div className={Style.skill_wrapper}>
          {
            skills.map(({icon, name}, i) => (
                <motion.div
                variants={cardVariants}
                initial='initial'
                whileInView='animate'
                viewport={{once: true}}
                key={i}>
                    <Svg icon={icon}/>
                    <p>{name}</p>
                </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MySkills;
