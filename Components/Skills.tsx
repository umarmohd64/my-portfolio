import React from "react";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className=" pt-[5rem] pb-[6rem] bg-[#09101a]" id="skills">
      <h1 className="heading">
        Technical <span className=" text-yellow-400 ">Skills</span>
      </h1>
      <div className=" w-[80%] mx-auto pt-[5rem] grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[2.2rem] items-center ">
        <div >
          <SkillsLanguage
            skill1="frontend"
            level1="w-[95%]"
            skill2="backend"
            level2="w-[69%]"
            skill3="javascript"
            level3="w-[80%]"
          />
        </div>

        <div>
          <SkillsLanguage
            skill1="Java"
            level1="w-[83%]"
            skill2="DSA"
            level2="w-[78%]"
            skill3="Python"
            level3="w-[67%]"
          />
        </div>


      </div>
    </div>
  );
};

export default Skills;
