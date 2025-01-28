import React, { useState } from "react";
import Style from "./footer.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const [message, setMessage] = useState('')

  return (
    <>
      <div className={Style.footer}>
        <div className={Style.main_container}>
          <div className={Style.contact_container}>
            <div>
              <h2>Let's Contact!</h2>
              <p>
                I am always open to discussing new projects, creative ideas or
                opportunities to be part of your vision. Feel free to reach out
                through:
              </p>
            </div>
            <form className={Style.form}>
              <div>
                <div>
                  <label htmlFor="firstName" className={Style.label}>
                    First name
                  </label>
                  <input
                    className={Style.input}
                    type="text"
                    placeholder=""
                    id="firstName"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={Style.label}>
                    Last Name
                  </label>
                  <input
                    className={Style.input}
                    type="text"
                    placeholder=""
                    id="lastName"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={Style.label}>
                    Email
                  </label>
                  <input
                    className={Style.input}
                    type="email"
                    placeholder=""
                    id="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={Style.label}>
                    Phone Number
                  </label>
                  <input
                    className={Style.input}
                    type="tel"
                    placeholder=""
                    id="phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={Style.label}>
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={ e => setMessage(e.target.value)}
                    className={Style.textarea}
                    placeholder=""
                    id="message"
                  />
                </div>
              </div>
              <a href={`mailto:highbeecodes001@gmail.com?body=${message}`}>
                <span>Let's Talk</span>
                <BsArrowUpRight />
              </a>
            </form>
          </div>
          <div className={Style.links_container}>
            <h2>Quick Links</h2>
            <div>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
              </ul>
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
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
