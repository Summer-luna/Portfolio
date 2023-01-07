import {ProjectCard} from "./projectCard";
import {ProjectData} from "../../utils/project-util";

function Project(props:any):JSX.Element {
  const {projects} = props;

  return <section className="pt-36 md:py-36 numbered-heading" id="Project">
    <h1 className="text-lightest-slate font-semibold headingText after:inline-block">Things I&apos;ve Built</h1>
    <ul className="pt-10">
      {
        projects && projects.map((project:ProjectData, index: number) => {
          return <li key={index} className="md:mb-40 mb-20"><ProjectCard data={project}/></li>
          })
      }
    </ul>
  </section>
}

export default Project;


