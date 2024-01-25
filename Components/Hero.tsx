import React from "react";
import Particle from "./Particle";
import TypeText from "./TypeText";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className='h-[89vh] bg-[url("/images/banner_dark.jpg")] bg-center bg-cover '>
      <Particle />

      <div className="w-[80%] grid grid-cols-1 lg:grid-cols-2 mx-auto gap-[3rem] items-center h-[100%] ">
        <div>
          <h1 className=" text-[33px] md:text-[50px] text-white font-bold ">
            Hi! <span className="  text-yellow-400 ">UMAR</span> this side.
          </h1>

          <TypeText />
          <p className=" text-[15px] md:text-[17px] text-[#ffffff92] mt-4 ">
          I&apos;m a web whiz skilled in frontend, utilizing the spells of JavaScript, TypeScript, React, Redux, Next, Tailwind, and a lot more. I am also a full stack developer creating magic through MERN. I try to create seamless interfaces and interactive wonders. <br /> (PS: I can be relied on for my fluent writing skills as well.)
          </p>
          <div className=" mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 text-white">
            <a href="/resume/Umar's Tech CV.pdf" download>
              <button className="px-[2rem] py-[1rem] hover:bg-[#ffffff44] border-[1px] text-[18px] font-bold transition-all duration-300 bg-transparent flex items-center space-x-2">
                <p>My Résumé</p>

                <ArrowDownTrayIcon className="w-[1.5rem] h-[1.5rem] text-white" />
              </button>
            </a>
          </div>
        </div>

        <div className="w-[420px] h-[420px] hidden relative bg-[#55e6a5] lg:flex items-center rounded-full shadow-lg">
          <Image
            src="/images/hero-edited.png"
            alt="me"
            layout="fill"
            className="object-fill rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
