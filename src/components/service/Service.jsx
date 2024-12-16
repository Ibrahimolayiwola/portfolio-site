import React from 'react'
import Style from './Service.module.css'
import { LiaPencilRulerSolid } from "react-icons/lia";
import { ImCogs } from "react-icons/im";
import { IoMdSpeedometer } from "react-icons/io";
const Service = () => {
  return (
   <>
    <div className={Style.container} id='services'>
      <div className={Style.txt_wrapper}>
        <span>-Service Me-</span>
        <h1>My Awesome Services</h1>
        <p>
        I specialize in three key areas: responsive web design, interactive user interfaces, and performance optimization. With expertise in these fields, I craft seamless digital experiences that engage users and drive results.
        </p>
      </div>
      <div className={Style.service_container}>
        <div className={Style.service}>
            <svg className={Style.svg} xmlns="http://www.w3.org/2000/svg" style={{margin: '0', padding: '0', shapeRendering: 'auto'}} width="60px" height="60px" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgb(36, 9, 157)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(238, 5, 238)' }} />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <LiaPencilRulerSolid className={Style.svg_icon} fill='url(#gradient)'/>
            </svg>
            <h2>Responsive Web Design</h2>
            <p> I excel in creating responsive websites that dynamically adapt to different devices, ensuring seamless navigation and optimal readability.</p>
        </div>
        <div className={Style.service}>
            <svg className={Style.svg} xmlns="http://www.w3.org/2000/svg" style={{margin: '0', padding: '0', shapeRendering: 'auto'}} width="60px" height="60px" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgb(36, 9, 157)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(238, 5, 238)' }} />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <ImCogs className={Style.svg_icon} fill='url(#gradient)'/>
            </svg>
            <h2>Interactive User Interfaces</h2>
            <p> I specialize in designing and implementing interactive user interfaces that captivate audiences and drive meaningful interactions.</p>
        </div>
        <div className={Style.service}>
            <svg className={Style.svg} xmlns="http://www.w3.org/2000/svg" style={{margin: '0', padding: '0', shapeRendering: 'auto'}} width="60px" height="60px" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'rgb(36, 9, 157)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(238, 5, 238)' }} />
                </linearGradient>
              </defs>
              {/* Icon with gradient fill */}
              <IoMdSpeedometer className={Style.svg_icon} fill='url(#gradient)'/>
            </svg>
            <h2>Performance Optimization</h2>
            <p>I am committed to delivering lightning-fast web experiences by optimizing frontend performance to the fullest.</p>
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Service
