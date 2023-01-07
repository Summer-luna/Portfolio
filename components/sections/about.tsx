import {MyPhoto} from "../ui/myPhoto";

export const About = ():JSX.Element => {

    const skills = {
        proficient: ["HTML/CSS", "JavaScript", "Java", "Node.js", "Express", "React", "SQL", "Git"],
        familiarized: ["PHP", "Python", "TypeScript", "Angular.js", "MongoDB", "Firebase", "Next.js", "Wordpress", "Bootstrap", "Tailwindcss"]
    }

  return <section className="py-10 numbered-heading" id="About">
      <h1 className="text-lightest-slate font-semibold headingText flex items-center">About Me</h1>
      <div className="grid md:grid-cols-5 gap-20 pt-10">
          <div className="col-span-3 text-fx-xl md:text-fz-xxl font-sans leading-normal">
              <p className="mb-3">Hello! My name is Xinyue. I&apos;m a graduate student of Boston University, majored in computer science with a specialization in software development. I&apos;ve done a lot of full-stack and front-end projects. I&apos;ve been building things since my university in 2018. I really enjoin creating things that on the internet.</p>
              <div className="mb-3">Here are a few technologies that I&apos;ve <em>proficient</em> with:</div>
              <ul className="mb-3 grid grid-cols-2 text-sm md:text-base font-mono">
                  {
                      skills.proficient.map((skill,index) => (
                          <li key={index} className="before:content-['▹'] before:text-green before:text-xs before:block before:relative before:top-0.5 flex gap-2 mb-2 tracking-wide">{skill}</li>
                      ))
                  }
              </ul>
              <div className="mb-3">Here are a few technologies that I&apos;ve <em>familiarized</em> with:</div>
              <ul className="mb-3 grid grid-cols-2 text-sm md:text-base font-mono ">
                  {
                      skills.familiarized.map((skill,index) => (
                          <li key={index} className="before:content-['▹'] before:text-green before:text-xs before:block before:relative before:top-0.5 flex gap-2 mb-2 tracking-wide">{skill}</li>
                      ))
                  }
              </ul>
          </div>
          <div className="col-span-2">
            <div className="relative left-16 md:left-0 max-w-[300px] after:content-[''] after:max-w-[300px] after:w-full after:h-full after:border-green after:border-4 after:absolute after:left-5 after:top-5  after:rounded after:-z-10 hover:after:translate-x-2 hover:after:translate-y-2 after:transition after:duration-200 after:ease-in-out after:delay-100">
                <div className="rounded-lg overflow-hidden max-w-[300px] "><MyPhoto /></div>
            </div>
          </div>
      </div>
  </section>
}