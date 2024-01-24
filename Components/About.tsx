import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-8rem pb-[4rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
       
        <div data-aos="fade-right" data-aos-delay={300} className="lg:w-[400px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[300px] h-[300px] relative">
          <Image
            src="/images/about-umar.png"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain "
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] bottom-[-1rem] left-[-1.5rem] "></div>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-[20px] font-bold uppercase mb-[0.5rem] text-[#55e6a5] ">
            ABOUT ME
          </h1>
          <h2 className=" text-[25px] md:text-[36px] lg:text-[44px] leading-[2rem] md:leading-[3rem] capitalize mb-[3rem] font-bold text-white ">
            A Little More...
          </h2>

          <div className=" mb-[3rem] flex items-center md:space-x-10 ">
            <span className="w-[2px] h-[240px] mr-[2rem] md:mr-0  md:block bg-slate-400 rounded-sm  "></span>
            <p className="text-[16px] text-slate-300 w-[100%] text-left">
            Hailing from the cultural city of Lucknow, I am currently pursuing my Bachelor&apos;s in Electronics and Communication Engineering at Jamia Millia Islamia, New Delhi. As a proficient Web Developer deeply rooted in the intricate world of Data Structures and Algorithms using JAVA, I thrive on merging creativity with technology. My leadership competency takes center stage as the Content Head at IEEE-JMI and TRS-JMI, showcasing my ability to craft compelling narratives. As a testament to my task-managing skills, I proudly served as a core member of TEDxJMI 2023 and I presently contribute my technical expertise as a tech-team member at 180DC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
