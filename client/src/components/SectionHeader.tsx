
import React from "react";

type SectionHeaderProps={title:string, subtitle:string}
const SectionHeader = ({ title, subtitle }:SectionHeaderProps) => {
  return (
    <div className="">
      <p className="text-[#d9e6ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        {subtitle}
      </p>
      <h2 className="text-sky-blue font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
