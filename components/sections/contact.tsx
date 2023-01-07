import {OutlinedBtn} from "../ui/button";
import {data} from "../../public/data/data";

export const Contact = ():JSX.Element => {
  return (
      <section id="Contact" className="py-36 numbered-heading flex justify-center items-center flex-col HeadingBeforeText gap-5">
          <h1 className="text-green text-base font-mono  ">What&apos;s Next</h1>
          <h2 className="text-5xl text-lightest-slate font-bold">Get In Touch</h2>
          <p className="text-center">I'm looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <OutlinedBtn size="Big" link={`mailto:${data.email}`}>Say Hello</OutlinedBtn>
      </section>
  )
}