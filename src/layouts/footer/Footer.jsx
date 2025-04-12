import React, { useState } from "react";
import Style from "./footer.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  const [message, setMessage] = useState('')

  return (
    <>
      <footer className={Style.footer}>
        <div className={Style.main_container}>
          <div className={Style.email_wrapper}>
            <a className={Style.email} href="mailto:highbeecodes001@gmail.com">
              Get in touch
            </a>
          </div>
          <div className={Style.icon}>
              <a
                href="https://www.linkedin.com/Ibrahim-olayiwola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn />
              </a>
              <a
                href="https://www.x.com/Highbee_Codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.github.com/Ibrahimolayiwola"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
            </div>
        </div>
        <div className={Style.copyright}>
          <p>
            <AiOutlineCopyright /> 2025 Highbeecodes. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
