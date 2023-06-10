"use client";

import React from "react";
import { testimonials } from "@/constants";
import Image from "next/image";

type FeedbackCardProps = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index:number;
}

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}:FeedbackCardProps) => {
  return (
    <div
      className="green-pink-gradient p-1  rounded-2xl xs:w-[320px] w-full"
    >
      <div className="bg-primary p-10 rounded-2xl">
        <p className="text-white font-black text-[48px]">&ldquo;</p>
        <div className="mt-1">
          <p>{testimonial}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p>
                <span className="blue-text-gradient">@</span>
                {name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} of {company}
              </p>
            </div>
            <Image
              src={image}
              alt={`feedback-${name}`}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
