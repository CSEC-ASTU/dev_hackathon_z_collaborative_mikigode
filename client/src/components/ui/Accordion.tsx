'use client'

import { useState } from 'react'
type AccordionProps = {
  accordionSummary: string | JSX.Element
  accordionDetails: string | JSX.Element
  className: string
}
const Accordion = ({
  accordionSummary,
  accordionDetails,
  className,
}: AccordionProps) => {
  const [active, setActive] = useState(false)

  return (
    <div className={`${className} ${active ? 'my-2' : 'my-0'} w-full h-fit `}>
      <button
        onClick={() => setActive((prev) => !prev)}
        className="w-full p-4 h-fit"
      >
        <h4 className={`text-lg md:text-xl text-left font-bold `}>
          {accordionSummary}
        </h4>
      </button>
      <ul
        className={`${
          active ? 'h-full' : 'h-0'
        } flex flex-col gap-2 overflow-hidden  px-4 `}
      >
        {accordionDetails}
      </ul>
    </div>
  )
}

export default Accordion
