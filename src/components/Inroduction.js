import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import avatar from "../img/avatar.png";
import resume from "../Resume.pdf";
import me from "../img/Resume.jpeg";

const Introduction = () => {
  return (
    <div className="home" id="home">
      <div className="intro">
        {/* avatar image */}
        <img src={me} alt="" className="avatar" />
        {/* info */}
        <h1>Xinyue Chen</h1>
        <span>
          I'm a <span>Full-Stack developer</span>
        </span>
        {/* social icon */}
        <ul className="social-icons">
          <li>
            <a
              href="https://www.linkedin.com/in/xinyue-chen-089700179/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto: cxyue@bu.edu">
              <FontAwesomeIcon icon={faEnvelope} className="email" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Summer-luna" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
          </li>
        </ul>
        {/* Button */}
        <div>
          <a href={resume} className="btn btn-default" target="_blank">
            Download Resume
          </a>
        </div>
        {/* scroll down mouse wheel */}
        <div className="scroll-down">
          <a href="mouse-wrapper">
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
