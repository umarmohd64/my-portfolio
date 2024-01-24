import { UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className=" pt-[4rem] pb-[3rem] bg-[#121212]" id="blog">
      <h1 className="heading" >Blogs</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-4 mt-[4rem] gap-[4rem] w-[90%] mx-auto ">
        <a
          href="https://whenimeetme.blogspot.com/2023/08/a-letter-to-self.html"
          target="_blank"
        >
          <div
            data-aos="fade-left"
            data-aos-delay={0}
            className="cursor-pointer "
          >
            <div className=" z-[4] w-[100%] relative h-[360px] hover:drop-shadow-[-2px_2px_8px_#55e6a583] transition-all duration-100 ">
              <Image
                src="/images/blog_1.jpg"
                alt="blog"
                layout="fill"
                className=" object-cover rounded-lg "
              />
            </div>
            <div className=" w-[90%] text-nowrap text-center mx-auto bg-[#09101a] relative p-[1.5rem] mt-[-3rem]">
              <div className=" z-[5] w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-1rem] text-black font-semibold text-[17px] mx-auto     ">
                August 01, 2023
              </div>
              <div className="items-center mt-[1rem] space-x-4 ">
                <div className=" text-center space-x-3 ">
                  <p className="text-white text-[1.2rem]">A Letter to Self</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://whenimeetme.blogspot.com/2023/01/the-times-tyranny.html"
          target="_blank"
        >
          <div
            data-aos="fade-left"
            data-aos-delay={200}
            className="cursor-pointer "
          >
            <div className="z-[4] w-[100%] relative h-[360px] hover:drop-shadow-[-2px_2px_8px_#55e6a583] transition-all duration-100 ">
              <Image
                src="/images/blog_2.jpg"
                alt="blog"
                layout="fill"
                className=" object-cover rounded-lg"
              />
            </div>
            <div className=" w-[90%] text-nowrap text-center mx-auto bg-[#09101a] relative p-[1.5rem] mt-[-3rem]">
              <div className=" z-[5] w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-1rem] text-black font-semibold text-[17px] mx-auto     ">
                January 06, 2023
              </div>
              <div className="items-center mt-[1rem] space-x-4 ">
                <div className=" text-center space-x-3 ">
                  <p className="text-white text-[1.2rem]">The Time&apos;s Tyranny</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://whenimeetme.blogspot.com/2022/09/the-anatomy-of-slow-mo.html"
          target="_blank"
        >
          <div
            data-aos="fade-left"
            data-aos-delay={400}
            className="cursor-pointer "
          >
            <div className=" z-[4] w-[100%] relative h-[360px] hover:drop-shadow-[-2px_2px_8px_#55e6a583] transition-all duration-100  ">
              <Image
                src="/images/blog_4.jpg"
                alt="blog"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            <div className=" w-[90%] text-nowrap text-center mx-auto bg-[#09101a] relative p-[1.5rem] mt-[-3rem]">
              <div className=" z-[5] w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-1rem] text-black font-semibold text-[17px] mx-auto     ">
                October 01, 2022
              </div>
              <div className="items-center mt-[1rem] space-x-4 ">
                <div className=" text-center space-x-3 ">
                  <p className="text-white text-[1.2rem]">Anatomy of Slo-Mo</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://whenimeetme.blogspot.com/2022/07/rat-race.html"
          target="_blank"
        >
          <div
            data-aos="fade-left"
            data-aos-delay={600}
            className="cursor-pointer "
          >
            <div className="z-[4] w-[100%] relative h-[360px] hover:drop-shadow-[-2px_2px_8px_#55e6a583] transition-all duration-100 ">
              <Image
                src="/images/blog_3.jpg"
                alt="blog"
                layout="fill"
                className=" object-cover rounded-lg"
              />
            </div>
            <div className=" w-[90%] text-nowrap text-center mx-auto bg-[#09101a] relative p-[1.5rem] mt-[-3rem]">
              <div className=" z-[5] w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-1rem] text-black font-semibold text-[17px] mx-auto">
                July 30, 2022
              </div>
              <div className="items-center mt-[1rem] space-x-4 ">
                <div className=" text-center space-x-3 ">
                  <p className="text-white text-[1.2rem]">Rat Race</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="flex items-center text-center justify-center mt-[4rem] mb-[1rem] w-[100%] text-white ">
        <a href="https://whenimeetme.blogspot.com/" target="_blank">
          <button className="px-[3.5rem] py-[1rem] hover:bg-[#ffffff44] border-[1px] text-[18px] font-bold transition-all duration-300 bg-transparent flex items-center space-x-2">
            <p>Read More...</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
