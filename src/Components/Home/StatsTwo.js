import React from "react";
import { s1, s2, s3, s4, s5, s6, s7 } from "../../img/img";

const StatsTwo = () => {
  return (
    <div className="w-full bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center pb-24">
          <h1 className="text-[#5a4bda] text-2xl md:text-3xl lg:text-5xl font-semibold px-2">
            Our Achiever's Work with
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-12 pb-20">
          <img className="w-[150px] h-[40px]" src={s1} alt="img" />
          <img className="w-[150px] h-[40px]" src={s2} alt="img" />
          <img className="w-[150px] h-[40px]" src={s3} alt="img" />
          <img className="w-[150px] h-[40px]" src={s4} alt="img" />
          <img className="w-[150px] h-[40px]" src={s5} alt="img" />
          <img className="w-[150px] h-[40px]" src={s6} alt="img" />
          <img className="w-[150px] h-[40px]" src={s7} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default StatsTwo;
