import { GiSkills } from "react-icons/gi";
import { BsInfoSquareFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

const sections = [
  {
    id: "about",
    label: "About",
    icon: <BsInfoSquareFill className="me-2 fs-1" />,
  },
  { id: "skills", label: "Skills", icon: <GiSkills className="me-2 fs-1" /> },
  {
    id: "background",
    label: "Background",
    icon: <MdCastForEducation className="me-2 fs-1" />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <AiFillProject className="me-2 fs-1" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <BiSolidContact className="me-2 fs-1" />,
  },
];

export default sections;
