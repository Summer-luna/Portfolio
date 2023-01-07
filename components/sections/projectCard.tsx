import Image from "next/image";
import { ProjectData } from "../../utils/project-util";
import { IconGithub } from "../icons/github";
import { IconExternal } from "../icons/external";

export const ProjectCard = (props: { data: ProjectData }): JSX.Element => {
  const { date, title, cover, github, external, tech, folderName, content } =
    props.data;
  const imagePath = `/content/projects/${folderName}/${cover}`;

  return (
    <div className="grid relative lg:grid-cols-12">
      <div className="lg:col-start-1 lg:col-end-9">
        <div className="rounded overflow-hidden"><a href={external} target="_blank"><Image src={imagePath} alt={title} width={640} height={450} /></a></div>
      </div>
      <div className="p-12 md:p-24 bg-light-nav md:w-full lg:bg-transparent bg-opacity-95 absolute grid grid-rows-12 justify-center items-center lg:col-start-7 lg:col-end-13 lg:py-10 lg:px-0 gap-4">
        <p className="lg:text-end font-mono text-green text-sm row-start-1 row-end-2">Side Project</p>
        <h2 className="lg:text-end font-sans text-2xl font-semibold text-lightest-slate row-start-2 row-end-3">{title}</h2>
        <p className="lg:text-end lg:bg-light-nav rounded md:p-6 row-start-3 row-end-8 text-[18px] md:text-xl text-light-slate shadow-sm shadow-[rgba(2, 12, 27, 0.7)]">{content}</p>
        <ul className="font-mono flex flex-wrap text-xs lg:text-sm gap-4 lg:justify-end row-start-8 row-end-10 text-light-slate">{tech && tech.map((t, i) => <li key={i}>{t}</li>)}</ul>
        <div className="flex lg:justify-end gap-4 text-lightest-slate row-start-10 row-end-12">
          <a href={github} target="_blank" className="hover:text-green">
            <IconGithub />
          </a>
          <a href={external} target="_blank" className="hover:text-green">
            <IconExternal />
          </a>
        </div>
      </div>
    </div>
  );
};
