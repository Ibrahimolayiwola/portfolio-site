import React from 'react'
import Style from './Rating.module.css'

const Rating = () => {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <span className={Style.fig}>10+</span>
        <span className={Style.txt}>Experience</span>
      </div>
      <div className={Style.wrapper}>
        <span className={Style.fig}>500+</span>
        <span className={Style.txt}>Projects Done</span>
      </div>
      <div className={Style.wrapper}>
        <span className={Style.fig}>99%</span>
        <span className={Style.txt}>Happy Clients</span>
      </div>
      <div className={Style.wrapper}>
        <span className={Style.fig}>24/7</span>
        <span className={Style.txt}>Online Support</span>
      </div>
    </div>
  )
}

export default Rating
