import SectionHeader from './SectionHeader'
import { testimonials } from '@/constants'
import FeedbackCard from './cards/FeedbackCard'
import SectionWrapper from './hoc/SectionWrapper'

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <SectionHeader title={'Testimonials.'} subtitle={'What other say'} />
      </div>
      <div
        className={` sm:px-16 px-6 -mt-20 pb-14 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] auto-rows-auto  gap-8`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'feedbacks')
