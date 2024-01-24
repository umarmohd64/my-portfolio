import { TypeAnimation } from "react-type-animation";

const TypeText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        1400,
        "Writer",
        1400,
        "Freelancer",
        1400,
        "Programmer",
        1400,
        "Bushwhacked!",
        1400,
      ]}
      wrapper="span"
      speed={60}
      className=" text-[2rem] md:text-[3rem] font-bold uppercase text-[#55e6a5] "
      repeat={Infinity}
    />
  );
};

export default TypeText;
