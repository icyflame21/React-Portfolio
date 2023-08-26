import ezSCM from 'assets/img/projects/ezSCM.png'
import omnifood from 'assets/img/projects/Omnifood.png'
import Swiggy from 'assets/img/projects/Swiggy.jpg'

export const projectData = [
  {
    id: 0,
    title: 'ezSCM',
    subTitle: 'Empowering SMEs with Effortless Supply Chain Management. Source, manage inventory, optimize production easily. Maximize sales, minimize costs. Simplify shipping, orders & collaboration. Your solution for seamless supply chain control.',
    liveUrl: 'https://ezscm.ai/',
    githubUrl: undefined,
    thumbnail: ezSCM,
    techStack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Bootstrap 5' },
      { id: 3, title: 'Material UI' },
      { id: 4, title: 'Localization' },
      { id: 5, title: 'Stripe' },
      { id: 6, title: 'SASS' },
      { id: 7, title: 'Redux' },
      { id: 8, title: 'React Native' },
      { id: 9, title: 'Webpack' },
      { id: 10, title: 'Azure TFS' },
    ]
  },
  {
    id: 1,
    title: 'Omnifood',
    subTitle: 'A global recipe search site offering seamless browsing. No annoying ads, just culinary exploration. Mobile-first design, advanced code splitting, secure sign-in, sleek UI, recipe creation/editing, dark mode, autosuggest. Revolutionizing recipe discovery.',
    liveUrl: 'https://omnifood.in/',
    githubUrl: 'https://github.com/icyflame21/Omnifood',
    thumbnail: omnifood,
    techStack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Bootstrap 5' },
      { id: 3, title: 'Material UI' },
      { id: 4, title: 'Firebase' },
      { id: 6, title: 'SASS' },
    ]
  },
  {
    id: 2,
    title: 'Swiggy (Clone)',
    subTitle: 'Leading Indian food ordering & delivery platform. A solo project completed in 7 days. Features include real-time location retrieval, Firebase OTP authentication, advanced filtering, and custom React-Map-GL for precise current location. Seamlessly handles payments through Razorpay gateway.',
    liveUrl: 'https://swiggy-foodlovers.netlify.app/',
    githubUrl: 'https://github.com/icyflame21/Swiggy_Clone',
    thumbnail: Swiggy,
    techStack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Redux' },
      { id: 3, title: 'Material UI' },
      { id: 4, title: 'Firebase' },
      { id: 5, title: 'Razorpay' },
    ]
  },
];
