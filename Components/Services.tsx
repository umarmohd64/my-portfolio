import { CommandLineIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon, PencilIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className=" bg-[#121212] pt-[5rem] pb-[5rem]" id="services">
      <p className="heading" >
        My <span className="text-yellow-400" >Services</span>
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto items-center gap-[4rem] mt-[4rem] text-white  ">
        <div data-aos="fade-left" >
            <div className="bg-red-600 rounded-lg h-[100%] w-fit hover:scale-110 transform transition-all duration-300 hover:rotate-3 font-semibold text-center p-[2rem] " >
                <CodeBracketIcon className=" w-[3rem] h-[3rem] mx-auto text-[#d3fae8] " />
                <h1 className=" text-[19px] md:text-[28px] mt-[1.5rem] mb-[1.5rem] " >
                    Frontend
                </h1>
                <p className=" text-[15px] text-[#d3d2d2] " >
                Using ReactJS and NextJS I can excel in delivering top-notch frontend web development services, integrating captivating interfaces with the power of MaterialUI, SCSS, TailwindCSS, ReduxJS etc. Let me elevate your project with a blend of creativity and frontend technologies, bringing visually appealing and responsive interfaces to life.
                </p>
            </div>
        </div>

        <div data-aos="fade-left" data-aos-delay={300} >
            <div className=" bg-blue-600  rounded-lg hover:scale-110 transform transition-all duration-300  font-semibold text-center p-[2rem] " >
                <CommandLineIcon className=" w-[3rem] h-[3rem] mx-auto text-[#d3fae8] " />
                <h1 className=" text-[19px] md:text-[28px] mt-[1.5rem] mb-[1.5rem] " >
                    SDE
                </h1>
                <p className=" text-[15px] text-[#d3d2d2] " >
                Proficient in Java and seasoned in solving real-life problems through Data Structures and Algorithms (DSA) on platforms like LeetCode, I offer efficient software engineering and development services. My expertise not only lies in coding but also in effective problem-solving and task management, ensuring optimal solutions for your software needs.
                </p>
            </div>
        </div>

        <div data-aos="fade-left" data-aos-delay={500}>
            <div className=" bg-green-700 rounded-lg hover:scale-110 transform transition-all hover:-rotate-3 duration-300 font-semibold text-center p-[2rem] " >
                <PencilIcon className=" w-[3rem] h-[3rem] mx-auto text-[#d3fae8] " />
                <h1 className=" text-[19px] md:text-[28px] mt-[1.5rem] mb-[1.5rem] " >
                    Copywritng
                </h1>
                <p className=" text-[15px] text-[#d3d2d2] " >
                With a passion for words and a knack for storytelling, I can offer efficient content writing services. As a dedicated content creator, I bring ideas to life through engaging narratives, ensuring every piece resonates with the audience. For crafting compelling & informative content, I provide my creativity to deliver messages that captivate and leave a lasting impact.
                </p>
            </div>
        </div>




      </div>
    </div>
  );
};

export default Services;
