import {useRef, useState} from "react";

import styles from "../../public/styles/header.module.css";
import { Logo } from "../icons/logo";
import { OutlinedBtn } from "../ui/button";
import { data } from "../../public/data/data";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  // dynamic styles
  const menuToggleStyle = menuOpen
    ? "before:w-[100%] before:top-0 before:opacity-0 after:w-full after: bottom-0 after:-rotate-90 rotate-[225deg] delay-100 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]"
    : "before:w-[120%] before:-top-2.5 before:opacity-100 after:w-10/12 after:-bottom-2.5 after:rotate-0 rotate-0 delay-0 ease-[cubic-bezier(0.55, 0.055, 0.675, 0.19)]";

  const asideBarStyle = menuOpen ? "translate-x-0" : "translate-x-full";

  return (
    <header className="w-full h-28 fixed top-0 pointer-events-auto transition-all px-6 md:px-10 lg:px-12.5 font-normal antialiased z-30 bg-nav">
      <nav className="relative w-full font-mono text-lightest-slate flex justify-between mt-8">
        <div>
          <a className="w-11 h-11" href="/">
            <Logo />
          </a>
        </div>
        <div className="hidden md:flex w-full justify-end gap-3 items-center">
          <ol className="p-0 m-0 flex gap-3">
            {data &&
              data.navLinks.map(({ name, url }, index) => {
                return (
                  <li
                    key={index}
                    className={`${styles.WiderScreenLi} py-3 px-3 opacity-0 before:mr-1 text-sm animate-fadeDown`}
                    style={{animationDelay: `${index + 1}00ms` }}
                  >
                    <a className="text-center hover:text-green" href={url}>
                      {name}
                    </a>
                  </li>
                );
              })}
          </ol>
          <OutlinedBtn size="Small" link="/Resume2.pdf">Resume</OutlinedBtn>
        </div>
        <div className="block md:hidden">
          <div>
            <button
              className="relative z-10 bg-transparent text-inherit"
              onClick={toggleMenu}
            >
              <div className="inline-block relative w-8 h-6">
                <div
                  className={`absolute top-1/2 right-0 w-8 h-0.5 rounded bg-green transition-all 
                before:content-[''] before:block before:bg-green before:h-0.5 before:absolute before:right-0 before:left-auto before:ease-linear before: duration-150 before:transition-all
                after:content-[''] after:block after:bg-green after:h-0.5 after:absolute after:right-0 after:left-auto after:ease-linear after: duration-150 after:transition-all
                ${menuToggleStyle}
                `}
                ></div>
              </div>
            </button>
            <aside
              className={`flex justify-center items-center fixed top-0 right-0 bottom-0 h-screen py-12 px-2.5 bg-light-nav ${styles.FluidWidth} shadow-aside z-0 transition-transform ${asideBarStyle}`}
            >
              <nav className="w-full flex flex-col text-center text-fluid">
                <ol className="w-full">
                  {data &&
                    data.navLinks.map(({ name, url }, index) => {
                      return (
                        <li
                            key={index}
                          className={`relative mt-0 mx-auto mb-5 ${styles.Li} animate-fadeDown`}
                        >
                          <a className="pt-1 px-5 pb-5 w-full hover:text-green cursor-pointer" href={url}>
                            {name}
                          </a>
                        </li>
                      );
                    })}
                </ol>
                <OutlinedBtn size="Big" link="/Resume2.pdf">Resume</OutlinedBtn>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
};
