import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
  level2: string;
  level3: string;
}

const SkillsLanguage = ({
  skill1,
  skill2,
  skill3,
  level1,
  level2,
  level3
}: Props) => {
  return (
    <div>
   <div className=" relative mb-[3.5rem]  ">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-md text-white text-[20px] font-bold">
          {skill1}
        </h1>
        <span
          className={`flex ${level1} items-center justify-end text-white font-thin italic pr-[0.6rem] bottom-0 h-[100%] absolute bg-[#55e6a575] rounded-md `}
        >
          {level1.substring(3,level1.length-1)}
        </span>
      </div>

   <div className=" relative mb-[3.5rem]  ">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-md text-white text-[20px] font-bold">
          {skill2}
        </h1>
        <span
          className={`${level2} flex items-center justify-end text-white font-thin italic pr-[0.6rem] bottom-0 h-[100%] absolute bg-[#55e6a575] rounded-md `}
        >
           {level2.substring(3,level1.length-1)}
        </span>
      </div>

    <div className=" relative mb-[3.5rem]  ">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-md text-white text-[20px] font-bold">
          {skill3}
        </h1>
        <span
          className={`${level3} flex items-center justify-end text-white font-thin italic pr-[0.6rem] bottom-0 h-[100%] absolute bg-[#55e6a575] rounded-md `}
        >
           {level3.substring(3,level1.length-1)}
        </span>
      </div>


    </div>
  );
};

export default SkillsLanguage;
