import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type ExperiencesProps = {
    experience:Experiences
}

const ExperienceCard = ({ experience }:ExperiencesProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        padding: "0.25rem",
        border: "none",
        background: "#050b21",
        color: "#fff",
        // "border-radius": "1rem",
        // background: "4px solid #18b6da",
        // background: "linear-gradient(90.13deg, #18b6da 1.9%, #2fc74c 97.5%)",
        // background:
        //   "-webkit-linear-gradient(-90.13deg, #18b6da 1.9%, #2fc74c 97.5%)",
      }}
      contentArrowStyle={{ borderRight: "16px solid  #ffff" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="bg-primary w-full h-full rounded-2xl  p-4">
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p className="text-secondary text-[16px] font-semibold m-[0]">
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};
export default ExperienceCard;