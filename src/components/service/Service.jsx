import React from "react";
import Style from "./Service.module.css";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { ImCogs } from "react-icons/im";
import { IoMdSpeedometer } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineManageSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { cardVariants, textVariants } from "../../animation/variants";

const Service = () => {
  return (
    <>
      <div className={Style.container} id="services">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, viewport: 0.1 }}
          className={Style.txt_wrapper}
        >
          <span>-Services-</span>
          <h1>My Awesome Services</h1>
          <p>
            I specialize in three key areas: responsive web design, interactive
            user interfaces, and performance optimization. With expertise in
            these fields, I craft seamless digital experiences that engage users
            and drive results.
          </p>
        </motion.div>
        <div className={Style.service_container}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className={Style.service}
          >
            <svg
              className={Style.svg}
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0", padding: "0", shapeRendering: "auto" }}
              width="60px"
              height="60px"
              viewBox="0 0 60 60"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "rgb(36, 9, 157)" }} />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(238, 5, 238)" }}
                  />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <LiaPencilRulerSolid
                className={Style.svg_icon}
                fill="url(#gradient)"
              />
            </svg>
            <h2>Responsive Web Design</h2>
            <p>
              {" "}
              I excel in creating responsive websites that dynamically adapt to
              different devices, ensuring seamless navigation and optimal
              readability.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className={Style.service}
          >
            <svg
              className={Style.svg}
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0", padding: "0", shapeRendering: "auto" }}
              width="60px"
              height="60px"
              viewBox="0 0 60 60"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "rgb(36, 9, 157)" }} />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(238, 5, 238)" }}
                  />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <ImCogs className={Style.svg_icon} fill="url(#gradient)" />
            </svg>
            <h2>Website Maintenance</h2>
            <p>
              {" "}
              I am dedicated to ensuring that website continues to function
              smoothly, remain secure, and stays up to date.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className={Style.service}
          >
            <svg
              className={Style.svg}
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0", padding: "0", shapeRendering: "auto" }}
              width="60px"
              height="60px"
              viewBox="0 0 60 60"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "rgb(36, 9, 157)" }} />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(238, 5, 238)" }}
                  />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <MdOutlineManageSearch
                className={Style.svg_icon}
                fill="url(#gradient)"
              />
            </svg>
            <h2>Search Engine Optimization</h2>
            <p>
              I implement on-page SEO strategies, and also keep up with SEO best
              practices inorder to boost search engine ranking.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Service;
