'use client'

import { Tilt } from 'react-tilt'
import Image, { StaticImageData } from 'next/image'
import { github } from '@/../public/assets'

type ProjectCardProps = {
  index: number
  name: string
  description: string
  tags: {
    name: string
    color: string
  }[]
  image: StaticImageData
  source_code_link: string
  demo_link?: string
}
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}: ProjectCardProps) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="green-pink-gradient p-1 rounded-2xl  w-full"
      >
        <div className="bg-primary rounded-2xl p-5">
          <div className="relative w-full h-[180px]">
            <Image
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  )
}
export default ProjectCard
