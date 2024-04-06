import ezSCM from "assets/img/projects/ezSCM-Web.webp";
import ezSCMmobile from "assets/img/projects/ezSCM-Mobile.webp";
import omnifood from "assets/img/projects/Omnifood.webp";
import Swiggy from "assets/img/projects/Swiggy.webp";
import Krushal from "assets/img/projects/krushal.webp";

import react from "assets/img/skills/react.svg";
import azure from "assets/img/skills/azure.svg";
import materialUI from "assets/img/skills/materialui.svg";
import bootstrap from "assets/img/skills/bootstrap.svg";
import redux from "assets/img/skills/redux.svg";
import react_native from "assets/img/skills/react_native.svg";
import sass from "assets/img/skills/sass.svg";
import rnpaper from "assets/img/skills/RN_Paper.svg";
import rnelements from "assets/img/skills/RN_Elements.png";
import firebase from "assets/img/skills/firebase.svg";
import stripe from "assets/img/skills/stripe.svg";
import webpack from "assets/img/skills/webpack.svg";
import Localization from "assets/img/skills/global-localization.svg";
import googleMaps from "assets/img/skills/google-maps.svg";
import Razorpay from "assets/img/skills/razorpay-logo.svg";

export const projectData = [
  {
    id: 0,
    title: "ezSCM (Web App)",
    subTitle: `<ul data-sourcepos="3:1-9:0">
    <li data-sourcepos="3:1-3:112"><strong>Streamlined Supply Chain:</strong>&nbsp;Developed ezSCM for easy procurement, inventory control, and efficient dispatch.</li>
    <li data-sourcepos="4:1-4:104"><strong>Increased Sales &amp; Transparency:</strong>&nbsp;Improved vendor integration for better sales and transparency.</li>
    <li data-sourcepos="5:1-5:78"><strong>Revamped UI:</strong>&nbsp;Designed a modern and consistent UI using the Falcon theme.</li>
    <li data-sourcepos="6:1-6:108"><strong>Optimized Order Fulfillment:</strong>&nbsp;Ensured customer satisfaction with smooth order fulfillment and tracking.</li>
    <li data-sourcepos="7:1-7:78"><strong>Secure Payments:</strong>&nbsp;Integrated Stripe for secure and seamless transactions.</li>
    <li data-sourcepos="8:1-9:0"><strong>Robust Inventory Management:</strong>&nbsp;Built a robust quote and SKU system for streamlined inventory.</li>
    </ul>`,
    liveUrl: "https://ezscm.ai/",
    thumbnail: ezSCM,
    ongoing: true,
    skills:
      "React, Bootstrap 5, Material UI, Localization, Google Maps, Stripe, SASS, Webpack, Azure TFS",
    logo: [
      react,
      bootstrap,
      materialUI,
      Localization,
      googleMaps,
      stripe,
      sass,
      webpack,
      azure,
    ],
  },
  {
    id: 1,
    title: "ezSCM (Mobile App)",
    subTitle: `<ul data-sourcepos="12:1-15:103">
    <li data-sourcepos="12:1-12:100"><strong>High-Performance Apps (iOS/Android):</strong>&nbsp;Developed high-performing mobile apps in just 2.5 months.</li>
    <li data-sourcepos="13:1-13:89"><strong>Smooth User Experience:</strong>&nbsp;Integrated Redux for a smooth and user-friendly experience.</li>
    <li data-sourcepos="14:1-14:134"><strong>Essential Features:</strong>&nbsp;Implemented key features like buying list, inventory management, order fulfillment, and work order creation.</li>
    <li data-sourcepos="15:1-15:103"><strong>Improved with Feedback:</strong>&nbsp;Incorporated user feedback for continuous improvement of the mobile app.</li>
    </ul>`,
    playstoreURL:
      "https://play.google.com/store/apps/details?id=com.saveplex.rn.oneapp&pli=1",
    appstoreURL: "https://apps.apple.com/in/app/saveplex/id6445966604",
    thumbnail: ezSCMmobile,
    ongoing: true,
    skills:
      "React Native, React Native Paper, React Native Elements, Redux toolkit, Google Maps, Azure TFS",
    logo: [react_native, rnpaper, rnelements, redux, googleMaps, azure],
  },
  {
    id: 5,
    title: "Krushal (Farmer App)",
    subTitle: `<ul data-sourcepos="1:1-5:73">
    <li data-sourcepos="1:1-1:73">Developed milk management features in Krushal farmer app (TechVibrant).</li>
    <li data-sourcepos="2:1-2:78">Streamlined milk recording &amp; health tracking for farmers in Krushal app.</li>
    <li data-sourcepos="3:1-3:64">Implemented ticketing system for cattle issues in Krushal app.</li>
    <li data-sourcepos="4:1-4:70">Ensured offline functionality for Krushal app in weak network areas.</li>
    <li data-sourcepos="5:1-5:73">Designed user-friendly cattle reports with Redux Toolkit (Krushal app).</li>
    </ul>`,
    playstoreURL: null,
    appstoreURL: null,
    thumbnail: Krushal,
    ongoing: false,
    skills:
      "React Native, React Native Paper, React Native Elements, Redux toolkit, Google Maps",
    logo: [react_native, rnpaper, rnelements, redux, googleMaps],
  },
  {
    id: 2,
    title: "Omnifood",
    subTitle: `<ul>
    <li><strong>Mobile Compatibility</strong>: Seamlessly works on all devices for a smooth user experience.</li>
    <li><strong>Reusable Components</strong>: Promotes code reusability, reduces development time, and maintains UI consistency.</li>
    <li><strong>Efficient State Management</strong>: Ensures smooth interactions and seamless user experiences.</li>
    <li><strong>Secure Data Storage</strong>: Strict security measures to protect user data in Firebase Database and Storage.</li>
    <li><strong>Password-less Sign-In</strong>: Flexible sign-in options, including password-less authentication for convenience.</li>
    <li><strong>SEO Optimization</strong>: Optimized for search engines, improving visibility and performance.</li>
    </ul>`,
    liveUrl: "https://omnifood.in/",
    githubUrl: "https://github.com/icyflame21/Omnifood",
    thumbnail: omnifood,
    ongoing: false,
    skills: "React, Bootstrap 5, Material UI, Firebase, SASS",
    logo: [react, bootstrap, materialUI, firebase, sass],
  },
  // {
  //   id: 3,
  //   title: "Swiggy (Clone)",
  //   subTitle:
  //     "Developed a lightweight web-based Swiggy clone, focusing on essential functionalities and efficient design to deliver a user-friendly experience while showcasing proficiency in web development.",
  //   liveUrl: "https://swiggy-foodlovers.netlify.app/",
  //   githubUrl: "https://github.com/icyflame21/Swiggy_Clone",
  //   thumbnail: Swiggy,
  //   ongoing: false,
  //   skills: "React, Redux, Material UI, Firebase, Razorpay",
  //   logo: [react, redux, materialUI, firebase, Razorpay],
  // },
];
