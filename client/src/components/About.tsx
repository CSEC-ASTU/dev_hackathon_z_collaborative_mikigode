import SectionWrapper from './hoc/SectionWrapper'
import ServiceCard from './cards/ServiceCard'
import SectionHeader from './SectionHeader'
import { services } from '@/constants'

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row md:gap-10">
        <div className="w-full">
          <SectionHeader title={'Introduction.'} subtitle={'Overview'} />

          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Andalus team member that is 2021 ICPC World Finalist, 2019 South
            African Regional Programming Contest Silver Medalist(2nd place) and
            2020 & 2019 Ethiopian Collegiate Programming Contest Gold Medalist.
          </p>
        </div>

        <div className="w-full px-auto  grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] auto-rows-auto gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
