import { settings } from 'config';
import { FiPhoneCall } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import '../CSS/GradientText.css'

export const bgWhiteIcons = [
  {
    id: 2,
    icon: <FaLinkedin className='text-linkedin' />,
    href: settings.linkedInLink
  },
  {
    id: 3,
    icon: <AiFillGithub className='text-github' />,
    href: settings.githubLink
  }
];

export const socialShares = [
  {
    id: 0,
    icon: <FiPhoneCall className='success' />,
    href: settings.number,
  },
  {
    id: 1,
    icon: <SiGmail className='text-google-plus' />,
    href: settings.gmail,
  },
  {
    id: 2,
    icon: <FaLinkedin className='text-linkedin' />,
    href: settings.linkedInLink
  },
  {
    id: 3,
    icon: <AiFillGithub className='text-github' />,
    href: settings.githubLink
  }
];