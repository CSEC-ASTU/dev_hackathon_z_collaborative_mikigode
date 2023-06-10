import SectionWrapper from './hoc/SectionWrapper'
import { projects } from '@/constants'

import ProjectCard from './cards/ProjectCard'
import SectionHeader from './SectionHeader'

const Works = () => {
  return (
    <>
      <SectionHeader title="Projects." subtitle="My Work" />
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-auto  gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')
