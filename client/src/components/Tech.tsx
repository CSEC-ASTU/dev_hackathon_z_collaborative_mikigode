import { technologies } from "@/constants";
import React from "react";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gao-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
        </div>
      ))}
    </div>
  );
};

export default Tech;
