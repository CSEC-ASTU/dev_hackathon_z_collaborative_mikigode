'use client'

import { contact } from '@/constants'
import ContactForm from './forms/ContactForm'
import SectionHeader from './SectionHeader'

const Contact = () => {
  return (
    <div className="relative h-fit min-h-[900px] flex flex-col-reverse md:flex-row">
      <div className="md:absolute w-full md:mt-[600px] z-[-10]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1435.7708390313983!2d39.290705464536146!3d8.560940676134493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1673867835073!5m2!1sen!2set"
          // width="800"
          height="300"
          className="rounded-lg w-full"
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-10`}
      >
        <span className="hash-span" id={'contact'}>
          &nbsp;
        </span>
        <SectionHeader title="Contact." subtitle="Get in touch" />
        <div className={`relative flex flex-col md:flex-row`}>
          <div className="w-full mad:max-w-1/2 z-10">
            <div className="w-full flex flex-col items-start gap-4 px-2 py-2 md:w-1/3 lg:w-1/2:">
              <div className="">
                <h4 className={`text-3xl md:text-4xl`}>Contact Us</h4>
              </div>
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-bold">Email</h5>
                <p>{contact.email}</p>
              </div>
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-bold">Address</h5>
                <p>{contact.address}</p>
              </div>
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-bold">phone</h5>
                <p>{contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="w-full mad:max-w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
