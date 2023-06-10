import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  turing,
  csec,
  scoville,
  toptech,
  astu,
  icoglabs,
} from '../../public/assets/index'

export const contact = {
  email: 'harunjeylanwako@gmail.com',
  address: 'collage Adama Oromia Ethiopia',
  phone: '+251922414657',
}
export const pageLinks = [
  {
    id: '/blog',
    title: 'Blog',
  },
]
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Python Developer',
    company_name: 'Turing · Full-time',
    icon: turing,
    iconBg: '#383E56',
    date: 'Jun 2022 - Present · 1 yr 1 mo',
    points: ['Skills: Python (Programming Language)'],
  },
  {
    title: 'Back End Developer',
    company_name: 'Toptech IT Solutions PLC ',
    icon: toptech,
    iconBg: '#E6DEDD',
    date: 'Apr 2021 - Present',
    points: [],
  },
  {
    title: 'AI Engineer',
    company_name: 'Scoville Co., Ltd',
    icon: scoville,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'I had the chance to work on a fascinating Machine Learning project on "text anonymization". ',
      "Scoville Co., Ltd.  is a diverse Japanese comapny with employees from 17 different nationalities. I'm honored to be a part of this inclusive workplace, and I've had the chance to learn from and work alongside individuals from a variety of backgrounds.",
      'Skills: Data Visualization · Natural Language Processing (NLP) · REST APIs · Data Analysis · Python (Programming Language) · Algorithms · Data Science',
    ],
  },
  {
    title: 'Mentor',
    company_name: 'CSEC-ASTU',
    icon: csec,
    iconBg: '#E6DEDD',
    date: 'Oc-2018 - Nov 2022',
    points: [
      'I am giving a tutorial for CSEC-ICPC students to support in competitive programming and to improve their problem solving ability.',
    ],
  },
  {
    title: 'System Developer',
    company_name: 'CSEC-ASTU',
    icon: csec,
    iconBg: '#E6DEDD',
    date: 'Oc-2018 - Nov 2022',
    points: [
      'I am developing an Andalus Judge System. Andalus is an automated judge system to run competitive programming contests. It has a mechanism to submit problem solutions, have them judged fully automatically and provides (web)interfaces for teams, the jury and the general public.',
    ],
  },
  {
    title: 'Head of Capacity Building',
    company_name: 'CSEC-ASTU',
    icon: csec,
    iconBg: '#E6DEDD',
    date: 'Oc-2018 - Nov 2019',
    points: [],
  },
  {
    title: 'Student Mentor',
    company_name: 'Adama Science and Technology University.',
    icon: astu,
    iconBg: '#E6DEDD',
    date: 'Oc-2017 - Nov 2022',
    points: [
      'I am giving tutorial for first & second year students in weekend for 4 years from 2016 to June 2022. The courses are Python, C++ , Java Applied Maths 1, Apllied Maths 2 and Applied Maths 3.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'iCog Labs',
    icon: icoglabs,
    iconBg: '#E6DEDD',
    date: 'Jul 2018 - Aug 2018',
    points: [],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
