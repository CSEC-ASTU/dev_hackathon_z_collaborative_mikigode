"use client";
import React from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import {
  VerticalTimeline,

} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
import ExperienceCard from "./cards/ExperienceCard";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <>
      <SectionHeader title="Work Experience" subtitle="What i have done" />
      <div className="my-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
