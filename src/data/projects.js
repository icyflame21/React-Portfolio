import ezSCM from "assets/img/projects/ezSCM Web.webp";
import ezSCMmobile from "assets/img/projects/ezSCM Mobile.webp";
import omnifood from "assets/img/projects/Omnifood.webp";
import Swiggy from "assets/img/projects/Swiggy.webp";
import Krushal from "assets/img/projects/krushal.png";

export const projectData = [
  {
    id: 0,
    title: "ezSCM (Web App)",
    subTitle:
      "Spearheaded the development and launch of ezSCM, an innovative web-based supply chain management platform, enabling businesses to optimize operations remotely.",
    liveUrl: "https://ezscm.ai/",
    thumbnail: ezSCM,
    ongoing: true,
    techStack: [
      { id: 1, title: "React" },
      { id: 2, title: "Bootstrap 5" },
      { id: 3, title: "Material UI" },
      { id: 4, title: "Localization" },
      { id: 34, title: "Google Maps Module" },
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
      "Led the creation and deployment of ezSCM Mobile, providing convenient supply chain management solutions accessible from smartphones, enhancing productivity and flexibility for users on the go.",
    playstoreURL:
      "https://play.google.com/store/apps/details?id=com.saveplex.rn.oneapp&pli=1",
    appstoreURL: "https://apps.apple.com/in/app/saveplex/id6445966604",
    thumbnail: ezSCMmobile,
    ongoing: true,
    techStack: [
      { id: 11, title: "React Native" },
      { id: 12, title: "React Native Paper" },
      { id: 34, title: "React Native Elements" },
      { id: 13, title: "Redux toolkit" },
      { id: 14, title: "Google Maps Module" },
      { id: 15, title: "Azure TFS" },
    ],
  },
  {
    id: 5,
    title: "Krushal (Farmer App)",
    subTitle:
      "Led the creation and deployment of Krushal (Farmer App), providing farmers manage daily milk production and raise disease tickets with ease. The app's auto-sync feature ensures smooth operation, even in low network areas, while detailed cattle reports provide valuable insights.",
    playstoreURL: null,
    appstoreURL: null,
    thumbnail: Krushal,
    ongoing: false,
    techStack: [
      { id: 11, title: "React Native" },
      { id: 12, title: "React Native Paper" },
      { id: 34, title: "React Native Elements" },
      { id: 13, title: "Redux toolkit" },
      { id: 14, title: "Google Maps Module" },
    ],
  },
  {
    id: 2,
    title: "Omnifood",
    subTitle:
      "It is a global recipe search website that was developed to provide users with a seamless recipe browsing experience, free from annoying advertisements commonly found on other websites.",
    liveUrl: "https://omnifood.in/",
    githubUrl: "https://github.com/icyflame21/Omnifood",
    thumbnail: omnifood,
    ongoing: false,
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
      "Developed a lightweight web-based Swiggy clone, focusing on essential functionalities and efficient design to deliver a user-friendly experience while showcasing proficiency in web development.",
    liveUrl: "https://swiggy-foodlovers.netlify.app/",
    githubUrl: "https://github.com/icyflame21/Swiggy_Clone",
    thumbnail: Swiggy,
    ongoing: false,
    techStack: [
      { id: 21, title: "React" },
      { id: 22, title: "Redux" },
      { id: 23, title: "Material UI" },
      { id: 24, title: "Firebase" },
      { id: 25, title: "Razorpay" },
    ],
  },
];
