import { Notepad } from './Notepad';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Terminal } from './Terminal';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { Games } from './Games';
import { SystemInfo } from './SystemInfo';

export interface Program {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  allowResize?: boolean;
  singleton?: boolean;
  requiredAchievements?: string[];
}

export const programs: Program[] = [
  {
    id: 'about-me',
    name: 'About Me',
    icon: '/assets/icons/about.png',
    component: AboutMe,
    defaultSize: { width: 600, height: 500 },
    singleton: true
  },
  {
    id: 'system-info',
    name: 'About This Site',
    icon: '/assets/icons/about.png',
    component: SystemInfo,
    defaultSize: { width: 500, height: 400 },
    singleton: true
  },
  {
    id: 'projects',
    name: 'My Projects',
    icon: '/assets/icons/projects.png',
    component: Projects,
    defaultSize: { width: 800, height: 600 },
    singleton: true
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: '/assets/icons/terminal.png',
    component: Terminal,
    defaultSize: { width: 600, height: 400 },
    allowResize: true
  },
  {
    id: 'contact',
    name: 'Contact Me',
    icon: '/assets/icons/contact.png',
    component: Contact,
    defaultSize: { width: 500, height: 600 },
    singleton: true
  },
  {
    id: 'skills',
    name: 'Skills & Experience',
    icon: '/assets/icons/skills.png',
    component: Skills,
    defaultSize: { width: 700, height: 500 },
    singleton: true
  },
  {
    id: 'notepad',
    name: 'Notepad',
    icon: '/assets/icons/notepad.png',
    component: Notepad,
    defaultSize: { width: 500, height: 400 },
    allowResize: true
  },
  {
    id: 'games',
    name: 'Mini Games',
    icon: '/assets/icons/games.png',
    component: Games,
    defaultSize: { width: 400, height: 500 },
    requiredAchievements: ['explorer']
  }
]; 