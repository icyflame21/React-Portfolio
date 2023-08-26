import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { settings } from 'config';
import { FiPhoneCall } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export const bgWhiteIcons = [
  {
    icon: ['fab', 'google-plus-g'],
    color: 'white',
    bg: 'google-plus',
    href: settings.gmail,
    target: "_blank",
  },
  { icon: ['fab', 'linkedin-in'], target: "_blank", bg: 'linkedin', color: 'white', href: settings.linkedInLink },
  { icon: faGithub, target: "_blank", bg: 'github', color: 'white', href: settings.githubLink }
];

export default [
  { icon: ['fab', 'facebook-f'], color: 'facebook', href: '#!' },
  { icon: ['fab', 'twitter'], color: 'twitter', href: '#!' },
  {
    icon: ['fab', 'google-plus-g'],
    color: 'google-plus',
    href: '#!'
  },
  { icon: ['fab', 'linkedin-in'], color: 'linkedin', href: '#!' },
  { icon: ['fab', 'medium-m'], color: '700', href: '#!' }
];

export const socialShares = [
  {
    id: 0,
    icon: <FiPhoneCall className='text-success' />,
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