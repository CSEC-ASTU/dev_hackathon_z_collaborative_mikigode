"use client";
import { Tilt } from "react-tilt";
import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  index:number;
  title: string;
  icon: StaticImageData;
}
const ServiceCard = ({ index, title, icon }:ServiceCardProps) => {
  return (
    <div
      className="xs:w-[160px] w-full rounded-[20px]"
    >
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div className="w-full bg-primary rounded-[20px] pt-2 px-2 min-h-[200px]  flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h5 className="w-full text-white text-[12px] font-bold text-center">
            {title}
          </h5>
        </div>
      </Tilt>
    </div>
  );
};
export default ServiceCard;
