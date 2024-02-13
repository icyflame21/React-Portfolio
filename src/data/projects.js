import ezSCM from 'assets/img/projects/ezSCM Web.webp'
import ezSCMmobile from 'assets/img/projects/ezSCM Mobile.webp'
import omnifood from 'assets/img/projects/Omnifood.webp'
import Swiggy from 'assets/img/projects/Swiggy.webp'

export const projectData = [
  {
    id: 0,
    title: "ezSCM (Web App)",
    subTitle:
      "Leveraged the customized Bootstrap theme's capabilities to ensure a seamless and uniform user interface across all screens. Key responsibilities encompassed order management, vendor collaboration, SKU management, seamless Stripe subscription integration, and the development of essential admin modules.",
    liveUrl: "https://ezscm.ai/",
    thumbnail: ezSCM,
    techStack: [
      { id: 1, title: "React" },
      { id: 2, title: "Bootstrap 5" },
      { id: 3, title: "Material UI" },
      { id: 4, title: "Localization" },
      { id: 5, title: "Stripe" },
      { id: 6, title: "SASS" },
      { id: 6, title: "Webpack" },
      { id: 10, title: "Azure TFS" },
    ],
  },
  {
    id: 1,
    title: "ezSCM (Mobile App)",
    subTitle:
      "Served as the Core Lead Developer, optimizing the user experience through effective Redux state management and streamlining app development for both iOS and Android platforms. Core responsibilities included overseeing inventory and order management, implementing efficient raw material sourcing strategies, and ensuring agile development based on client feedback.",
    playstoreURL:
      "https://play.google.com/store/apps/details?id=com.saveplex.rn.oneapp&pli=1",
    appstoreURL: "https://apps.apple.com/in/app/saveplex/id6445966604",
    thumbnail: ezSCM,
    techStack: [
      { id: 11, title: "React Native" },
      { id: 12, title: "React Native Paper" },
      { id: 13, title: "Redux" },
      { id: 14, title: "Google Maps Module" },
      { id: 15, title: "Azure TFS" },
    ],
  },
  {
    id: 2,
    title: "Omnifood",
    subTitle:
      "A global recipe search site offering seamless browsing. No annoying ads, just culinary exploration. Mobile-first design, advanced code splitting, secure sign-in, sleek UI, recipe creation/editing, dark mode, autosuggest. Revolutionizing recipe discovery.",
    liveUrl: "https://omnifood.in/",
    githubUrl: "https://github.com/icyflame21/Omnifood",
    thumbnail: omnifood,
    techStack: [
      { id: 16, title: "React" },
      { id: 17, title: "Bootstrap 5" },
      { id: 18, title: "Material UI" },
      { id: 19, title: "Firebase" },
      { id: 20, title: "SASS" },
    ],
  },
  {
    id: 3,
    title: "Swiggy (Clone)",
    subTitle:
      "Leading Indian food ordering & delivery platform. A solo project completed in 7 days. Features include real-time location retrieval, Firebase OTP authentication, advanced filtering, and custom React-Map-GL for precise current location. Seamlessly handles payments through Razorpay gateway.",
    liveUrl: "https://swiggy-foodlovers.netlify.app/",
    githubUrl: "https://github.com/icyflame21/Swiggy_Clone",
    thumbnail: Swiggy,
    techStack: [
      { id: 21, title: "React" },
      { id: 22, title: "Redux" },
      { id: 23, title: "Material UI" },
      { id: 24, title: "Firebase" },
      { id: 25, title: "Razorpay" },
    ],
  },
];
