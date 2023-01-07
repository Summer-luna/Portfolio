import {IconGithub} from "../icons/github";
import {IconLinkedIn} from "../icons/linkedin";
import {IconExternal} from "../icons/external";

export const Icon = (props:{name:string}):JSX.Element => {

  switch (props.name) {
    case "Github":
      return <IconGithub />
    case "LinkedIn":
      return <IconLinkedIn />
    default:
      return <IconExternal />
  }
}