import React from "react";
import Style from "./projects.module.css";
import thumbnail_1 from "../../assets/thumbnail_1.png";
import thumbnail_2 from "../../assets/jhi-thumbnail.png";
import thumbnail_3 from "../../assets/gnest-thumbnail.png";
import { motion } from "framer-motion";
import {
  cardVariants,
  imageVariants,
  textVariants,
} from "../../animation/variants";
import Lazyload from "react-lazyload";

const Projects = () => {
  const projects = [
    {
      title: "Quaterz",
      description:
        "A real-estate platform designed to help users buy, rent, and sell their dream homes and properties easily. This platform features a user-friendly sign-in page, allowing users to quickly and securely access their accounts. Property owners can effortlessly upload their listings for rent or sale, reaching a wide audience. Discover your next home with Quaterz.",
      thumbnail: thumbnail_1,
      tools: ["ReactJS", "TailwindCSS", "Firebase"],
      url: "https://quarterz.vercel.app/",
    },
    {
      title: "JHI Initiative",
      description:
        "A web app that showcases the commendable work of the JHI organization, dedicated to making positive impact in the lives of individuals and communities. It features a media page, join us page, and an about page with a user-friendly contact form.",
      thumbnail: thumbnail_2,
      tools: ["ReactJS", "TailwindCSS"],
      url: "https://jhi-website.vercel.app",
    },
    {
      title: "Gadget Nest",
      description:
        "A premier e-commerce platform where users can explore and purchase the latest gadget and electronics. The website boast a user-friendly search bar for effortless product discovery, a seamless cart section for an enhanced shopping experience, and a secure login section for user authentication",
      thumbnail: thumbnail_3,
      tools: ["NextJS", "TailwindCSS", "Firebase", "Sanity"],
      url: "https://gadget-nest.vercel.app",
    },
    // {
    //   name: "",
    //   description: "",
    //   thumbnail: "",

    //   thumbnail: thumbnail_1,
    //   tools: ['ReactJS','TailwindCSS','Firebase']
    // },
    // {
    //   name: "",
    //   description: "",
    //   thumbnail: "",
    // },
  ];

  return (
    <>
      <div className={Style.container}>
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className={Style.txt_wrapper}
        >
          <span>-Projects-</span>
          <h1>My Projects</h1>
          <p>
            Explore some of the exciting projects I've been working on,
            showcasing my skills and passion for development.
          </p>
        </motion.div>
        <div className={Style.card_container}>
          {projects.map(({ title, description, thumbnail, tools, url }, i) => (
            <div className={Style.card} key={i}>
              <div
                className={Style.img_wrapper}
              >
                  <img className={Style.img} src={thumbnail} alt="thumbnail" />
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div
                  className={Style.card_text}
                >
                  <span>{title}</span>
                  <p>{description}</p>
                  <div className={Style.tool_wrapper}>
                    {tools.map((tool, i) => (
                      <span key={i}>{tool}</span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
