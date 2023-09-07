import ezSCM from 'assets/img/projects/ezSCM Web.svg'
import ezSCMmobile from 'assets/img/projects/ezSCM Mobile.svg'
import omnifood from 'assets/img/projects/Omnifood.svg'
import Swiggy from 'assets/img/projects/Swiggy.svg'

export const projectData = [
  {
    id: 0,
    title: 'ezSCM (Web App)',
    subTitle: "Leveraged the Falcon theme's capabilities to ensure a seamless and uniform user interface across all screens. Key responsibilities encompassed order management, vendor collaboration, SKU management, seamless Stripe subscription integration, and the development of essential admin modules.",
    liveUrl: 'https://ezscm.ai/',
    thumbnail: ezSCM,
    techStack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Bootstrap 5' },
      { id: 3, title: 'Material UI' },
      { id: 4, title: 'Localization' },
      { id: 5, title: 'Stripe' },
      { id: 6, title: 'SASS' },
      { id: 9, title: 'Webpack' },
      { id: 10, title: 'Azure TFS' },
    ]
  },
  {
    id: 1,
    title: 'ezSCM (Mobile App)',
    subTitle: 'As the Core Lead Developer for the mobile app, I oversaw Redux state management for a smoother user experience. Faster app dev for both iOS and Android. Core responsibilities includes inventory and order management, raw material sourcing (direct and group purchases), and agile development based on client feedback.',
    playstoreURL: 'https://play.google.com/store/apps/details?id=com.saveplex.rn.oneapp&pli=1',
    appstoreURL: 'https://apps.apple.com/in/app/saveplex/id6445966604',
    thumbnail: ezSCMmobile,
    techStack: [
      { id: 8, title: 'React Native' },
      { id: 2, title: 'React Native Paper' },
      { id: 7, title: 'Redux' },
      { id: 4, title: 'Localization' },
      { id: 10, title: 'Azure TFS' },
    ]
  },
  {
    id: 2,
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
    id: 3,
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
