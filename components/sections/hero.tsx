import {useEffect, useRef, useState} from "react";

const items = [
    <h1 key="1" className="text-green hero-fluid-text font-mono ml-[2px] mb-5 md:ml-1 md:mb-8" >Hi, my name is</h1>,
    <h2 key="2" className="big-heading font-semibold text-lightest-slate mb-2">Xinyuen Chen</h2>,
    <h3 key="3" className="big-heading font-semibold">I love building things for the web.</h3>,
    <p key="4" className="mt-5 max-w-xl leading-normal font-sans text-fx-xl md:text-fz-xxl">
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. Currently I&apos;m a graduate student at <a href="https://www.bu.edu/" className="text-green">Boston University</a>, major in Computer Science.
    </p>
]

export const Hero = (): JSX.Element => {

    const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    const timeout = setTimeout(()=>{setIsMounted(true)}, 1000);
    return () => clearTimeout(timeout);
  },[]);

  return <section id="hero" className="flex flex-col justify-center items-start h-full min-h-[85vh] pb-32 leading-none md:min-h-[91vh] md:h-auto">
          {
              items.map((item, index)=>{
                  return (
                    <div className={`opacity-0 relative top-2 ${isMounted && "opacity-100 -top-2"} transition-all ease-linear duration-300`} style={{transitionDelay: `${index + 1}00ms` }}>{item}</div>
                  )
              })
          }
  </section>;
};
