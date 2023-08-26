import { MdOutlineCastForEducation, MdOutlineModelTraining } from 'react-icons/md'
import {GiSuitcase} from 'react-icons/gi'

export const VerticalTimelineData = [
  {
    title: 'Software Engineer @TechVibrant',
    description:
      'Contributed to 2 global SaaS products, ezSCM and iFarm, playing a key role as a lead React Native developer for ezSCM. Achieved rapid UI enhancements for web and mobile platforms, delivering the mobile app in just 2 months, resulting in a 40% boost in mobile efficiency and improved web security against unauthorized access.',
    year: '2022-Present',
    date: '18 Jul',
    icon: <GiSuitcase className='fs-2 text-success bg-white' />
  },
  {
    title: 'Full Stack Developer Trainee @FYND',
    description:
      'Completed 4-month Full Stack Developer Trainee program at Fynd Academy (Shopsense Retail Technologies Ltd.), successfully creating independent, industry-level projects using the MERN tech stack.',
    year: '2023',
    date: 'Feb 17-May 25',
    icon: <GiSuitcase className='fs-2 text-success bg-white' />
  },
  // {
  //   title: 'Summer Trainee @SAIL',
  //   description:
  //     '3-month SAIL apprenticeship provided hands-on training in electrical machines, motor winding, and AC/DC motor maintenance, enhancing practical skills significantly.',
  //   year: '2022',
  //   date: 'May 5-Jul 15',
  //   icon: <GiSuitcase className='fs-2 text-success bg-white' />
  // },
  {
    title: 'Masai',
    description:
      'Certified in Full Stack Web Development from Masai, specializing in the MERN stack with a strong command of JavaScript. Proficient in solving data structures and algorithms through extensive hands-on coding practice.',
    year: '2021-2022',
    date: '20 Sep-13 Jun',
    icon: <MdOutlineModelTraining className='fs-2 text-warning bg-white' />
  },
  {
    title: 'Central University of Haryana',
    description:
      'I hold a B.Tech in Electrical Engineering and concurrently served 2 years as Cultural Secretary and Class Representative, showcasing diverse leadership skills and technical prowess.',
    year: '2018-2022',
    date: '18 Aug-25 Aug',
    icon: <MdOutlineCastForEducation className='fs-2 text-danger bg-white' />
  }
];
