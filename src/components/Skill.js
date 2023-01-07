import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode } from "@fortawesome/free-brands-svg-icons";

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <h2>SKILLS & TOOLS</h2>
      <div className="row">
        <div className="col">
          <i className="devicon-html5-plain"></i>
          <p>HTML5</p>
        </div>
        <div className="col">
          <i className="devicon-css3-plain"></i>
          <p>CSS3</p>
        </div>
        <div className="col">
          <i className="devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>
        <div className="col">
          <i className="devicon-java-plain"></i>
          <p>Java</p>
        </div>
        <div className="col">
          <i className="devicon-php-plain" style={{ fontSize: "4rem" }}></i>
          <p>PHP</p>
        </div>
        <div className="col">
          <i className="devicon-python-plain"></i>
          <p>Python</p>
        </div>
        <div className="col">
          <i className="devicon-react-original"></i>
          <p>React</p>
        </div>
        <div className="col">
          <i className="devicon-angularjs-plain"></i>
          <p>Angular</p>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faNode} className="icon" />
          <p>Node JS</p>
        </div>
        <div className="col">
          <i className="devicon-express-original"></i>
          <p>Express JS</p>
        </div>
        <div className="col">
          <i className="devicon-mysql-plain" style={{ fontSize: "4rem" }}></i>
          <p>MySQL</p>
        </div>
        <div className="col">
          <i className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>
        <div className="col">
          <i className="devicon-firebase-plain"></i>
          <p>Firebase</p>
        </div>
        <div className="col">
          <i className="devicon-nextjs-original colored"></i>
          <p>Next.js</p>
        </div>
        <div className="col">
          <i className="devicon-typescript-plain"></i>
          <p>TypeScript</p>
        </div>
        <div className="col">
          <i className="devicon-bootstrap-plain"></i>
          <p>Bootstrap</p>
        </div>
        <div className="col">
          <i className="devicon-git-plain"></i>
          <p>Git</p>
        </div>
        <div className="col">
          <i className="devicon-github-original"></i>
          <p>Github</p>
        </div>
        <div className="col">
          <i className="devicon-wordpress-plain"></i>
          <p>Wordpress</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
