import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import {gsap} from "gsap";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

  gsap.registerPlugin(ScrollToPlugin)

  const scrollTo = (ele: string) => {
    gsap.to(window, {
      scrollTo: {
        y: ele,
        autoKill: false,
      },
      duration: 1,
    });
  };

  

  return (
    <div className="w-[100%] sticky z-[100] top-0 h-[11vh] bg-[#141c27] shadow-lg">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%] ">
        <h1 className="flex-[0.7] ml-[-1.4rem] cursor-pointer text-[40px] font-bold text-white ">
          محمد
          <span className="text-yellow-300 pr-[6px]">عمر</span>
        </h1>
        <div className="nav-link ">HOME</div>
        <div className="nav-link" onClick={()=> scrollTo('#about')}>ABOUT</div>
        <div className="nav-link"  onClick={()=> scrollTo('#services')}>SERVICES</div>
        <div className="nav-link"  onClick={()=> scrollTo('#skills')}>SKILLS</div>
        <div className="nav-link"  onClick={()=> scrollTo('#projects')}>PROJECTS</div>
        <div className="nav-link"  onClick={()=> scrollTo('#blog')}>BLOG</div>
        <div className="nav-link"  onClick={()=> scrollTo('#contact')}>CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
