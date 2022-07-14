import React from "react";

export const NavItem = ({name, link, activeLink}) => {
  return(
    <>
      <li className="nav-item">
        <a className={`nav-link ${activeLink}`} href={link}>{name}</a>
      </li>
    </>
  )
}