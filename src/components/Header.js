import React, {useRef} from "react";
import {NavItem} from "./NavItem";

const Header = () => {
  
  const buttonRef = useRef(null);
  const navlistRef = useRef(null);

  const addRedDot = (e) => {
    const navLink = document.querySelectorAll(".nav-link");
    const targetElement = e.target;

    if(targetElement.classList.contains("nav-link")){
      /* Loop through all .nav-links to find if contains class called active-link */
      navLink.forEach(link => link.classList.contains("active-link") && link.classList.remove("active-link"));
  
      targetElement.classList.add("active-link");
    }
  }
  
  /* 
   * click menu button
   * change button shape to X by toggle nav-toggle class
   * show nav-list by toggle active-navlist
  */
 
  const onClickMenu = (e) =>{
    buttonRef.current.classList.toggle("nav-toggle");
    navlistRef.current.classList.toggle("active-navlist");
  }

  return(
    <>
      <header className="header">
        <div className="nav container px-15">
          <a href="/"><i className="bi bi-moon-stars"></i></a>
          <div className="nav-menu">
            <ul className="nav-list" onClick={ addRedDot } ref={navlistRef}>
              <NavItem name="Home" link="#home" activeLink="active-link" />
              <NavItem name="Skills" link="#skills" activeLink="" />
              <NavItem name="Projects" link="#projects" activeLink="" />
              <NavItem name="About me" link="#Aboutme" activeLink="" />
              <NavItem name="Contact" link="#contact" activeLink="" />
              <NavItem name="Blog" link="#blog" activeLink="" />
            </ul>
          </div>
          <div className="nav-btn" onClick={onClickMenu} ref= {buttonRef} >
            <div className="nav-lines">
              <div className="nav-line1"></div>
              <div className="nav-line2"></div>
              <div className="nav-line3"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header