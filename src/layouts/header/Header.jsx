import React, { useState } from 'react'
import Style from './Header.module.css'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className={Style.header}>
       {/* Logo and desktop nav  */}
      <div className={Style.wrapper}>
        <div className={Style.logo}>
          <span className={Style.text1}>Hi</span>
          <span className={Style.text2}>BCodes</span>
        </div>
        <nav className={Style.nav}>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#services'>Services</a></li>
          </ul>
        </nav>
        <div className={Style.button}>
          <a href='mailto:highbeecodes001@gmail.com'>Contact Me</a>
        </div>
        {/*  mobile button  */}
         <div className={`${Style.hamburger_menu} ${toggleMenu ? Style.toggle_menu : ''}`} onClick={() => setToggleMenu(!toggleMenu)}>  <span ></span></div>  
      </div>
      {/* mobile nav  */}
      <div className={`${Style.mobile_nav} ${toggleMenu ? Style.open_nav : ''}`}>
        <ul onClick={() => setToggleMenu(!toggleMenu)}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#services'>Services</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
