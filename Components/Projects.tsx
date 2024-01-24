import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className=" bg-[#02050a] pt-[4rem] md:pt-8rem pb-[4rem] " id="projects">
      <h1 className="heading">
        Personal <span className="text-yellow-400">Projects</span>
      </h1>

      <div className=" w-[85%] pt-[4rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[4rem] ">
        <div data-aos="fade-up data-aos-delay={0} ">
          <a href="https://cinepedia-nine.vercel.app/" target="_blank">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-all duration-200 relative h-[200px] w-[100%] md:h-[250px]">
              <Image
                src="/images/cinepedia-pr1.jpg"
                alt="project1"
                layout="fill"
                className="object-contain"
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay={160}>
          <a href="https://fit-flex.netlify.app/" target="_blank">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative h-[200px] w-[100%] md:h-[250px]  ">
              <Image
                src="/images/fitflex-pr2.jpg"
                alt="project1"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay={320}>
          <a href="https://github.com/umarmohd64/mausoleum" target="_blank">
            <div className=" transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative h-[200px] w-[100%] md:h-[250px]">
              <Image
                src="/images/mausoleum-pr3.jpg"
                alt="project1"
                layout="fill"
                className="object-contain "
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay={480}>
          <a href="https://memes-on-a-click.netlify.app/" target="_blank">
            <div className=" transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative h-[200px] w-[100%] md:h-[250px]  ">
              <Image
                src="/images/meme-pr4.jpg"
                alt="project1"
                layout="fill"
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center text-center justify-center mt-[4.6rem] mb-[1rem] w-[100%] text-white ">
        <a href="https://github.com/umarmohd64" target="_blank">
          <button className="px-[3.8rem] py-[1rem] hover:bg-[#ffffff44] border-[1px] text-[18px] font-bold transition-all duration-300 bg-transparent flex items-center space-x-2">
            <p>More...</p>
          </button>
        </a>
      </div>








    </div>
  );
};

export default Projects;