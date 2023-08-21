import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { settings } from 'config';

export const bgWhiteIcons = [
  {
    icon: ['fab', 'google-plus-g'],
    color: 'white',
    bg:'google-plus',
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
