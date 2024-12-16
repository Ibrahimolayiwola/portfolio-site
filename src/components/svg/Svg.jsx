import React from 'react'
import Style from './Svg.module.css'

const Svg = ({icon}) => {
  return (
    <>
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
              {React.cloneElement(icon, { fill: "url(#gradient)", className: Style.svg_icon })}
            </svg>
    </>
  )
}

export default Svg
