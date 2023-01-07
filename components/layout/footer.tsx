import {IconGithub} from "../icons/github";
import {IconLinkedIn} from "../icons/linkedin";
import {IconExternal} from "../icons/external";

export const Footer = ():JSX.Element => {
  return (
      <div className="flex flex-col justify-center items-center gap-4 pb-10 md:hidden">
          <div className="flex gap-4 mb-6">
              <a href="https://github.com/Summer-luna" target="_blank"><IconGithub /></a>
              <a href="https://www.linkedin.com/in/xinyue-chen-089700179/" target="_blank"><IconLinkedIn /></a>
              <a href="" target="_blank"><IconExternal /></a>
          </div>
          <div className="font-mono text-sm">Built by Xinyue Chen & Designed by Brittany Chiang </div>
      </div>
  )
}