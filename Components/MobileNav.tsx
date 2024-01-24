import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollTo = (ele: string) => {
    gsap.to(window, {
      scrollTo: {
        y: ele,
        autoKill: false,
      },
      duration: 1,
    });
  };

  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 bottom-0 top-0 right-0 left-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#about")}>
          ABOUT
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#services")}>
          SERVICES
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#skills")}>
          SKILLS
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#projects")}>
          PROJECTS
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#blog")}>
          BLOG
        </div>
        <div className="nav-link-mobile" onClick={() => scrollTo("#contact")}>
          CONTACT
        </div>
      </div>

      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem]  text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
