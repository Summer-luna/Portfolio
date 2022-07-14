import React, {useState} from 'react';
import Project from './Project';

import Categories from './Categories';
import {projects} from "../data/projects";

const Projects = () => {
  
  const [project, setProject] = useState(projects);
  
  const filterProjects = (e) => {
    const results = [];
    const categories = document.querySelectorAll(".category");

    if(e.target.classList.contains("category")){
      projects.forEach((project)=>{
        if(project.tags.includes(e.target.textContent)){
          results.push(project);
        }
      })
      setProject(results);
    }

    if(e.target.textContent == "All"){
      setProject(projects);
    }

    /* add active-btn */
    categories.forEach(category => {
      if(category.classList.contains("active-btn")){
        category.classList.remove("active-btn");
      }
    })
    
    e.target.classList.add("active-btn");
  }

  return(
    <div className='projects' id="projects">
      <Categories onCategoryClick={filterProjects}/>
      <Project projects={project} />
    </div>
  )
}

export default Projects;
