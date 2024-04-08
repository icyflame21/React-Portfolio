import "../CSS/GradientText.css";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CUH from "assets/img/designs/CUH.png";
import Masai from "assets/img/designs/Masai.png";
import FyndAcademy from "assets/img/designs/Fynd_Academy_Logo.png";
import TechVibrant from "assets/img/designs/techvibrant-hd-logo.png";

export const VerticalTimelineData = [
  {
    title: "Software Engineer @TechVibrant",
    description:
      "Key contributor to global SaaS products ezSCM and iFarm, serving as lead React Native developer for ezSCM. Facilitated rapid UI improvements across web and mobile platforms, culminating in the delivery of the mobile app within 2 months. Resulted in a remarkable 70% increase in mobile efficiency and bolstered web security against unauthorized access.",
    year: "2022-Present",
    date: "18 Jul",
    icon: (
      <LazyLoadImage
        effect="blur"
        src={TechVibrant}
        style={{
          width: "35px",
          height: "35px",
          objectFit: "contain",
        }}
        className="fluid"
      />
    ),
  },
  {
    title: "Full Stack Developer Trainee @FYND Academy",
    description:
      "Completed 4-month Full Stack Developer Trainee program at Fynd Academy (Shopsense Retail Technologies Ltd.), successfully creating independent, industry-level projects using the MERN tech stack.",
    year: "2023",
    date: "Feb 17-May 25",
    icon: (
      <LazyLoadImage
        effect="blur"
        src={FyndAcademy}
        style={{
          width: "35px",
          height: "35px",
          objectFit: "contain",
        }}
        className="fluid"
      />
    ),
  },
  {
    title: "Masai, Bangalore",
    description:
      "Certified in Full Stack Web Development from Masai, specializing in the MERN stack with a strong command of JavaScript. Proficient in solving data structures and algorithms through extensive hands-on coding practice.",
    year: "2021-2022",
    date: "20 Sep-13 Jun",
    icon: (
      <LazyLoadImage
        effect="blur"
        src={Masai}
        style={{
          width: "35px",
          height: "35px",
          objectFit: "contain",
        }}
        className="fluid"
      />
    ),
  },
  {
    title: "Central University of Haryana, Mahendragarh",
    description:
      "I hold a B.Tech in Electrical Engineering and concurrently served 2 years as Cultural Secretary and Class Representative, showcasing diverse leadership skills and technical prowess.",
    year: "2018-2022",
    date: "18 Aug-25 Aug",
    icon: (
      <LazyLoadImage
        effect="blur"
        src={CUH}
        style={{
          width: "35px",
          height: "35px",
          objectFit: "contain",
        }}
        className="fluid"
      />
    ),
  },
];
