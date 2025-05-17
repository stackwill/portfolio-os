interface SocialLinks {
  github: string;
  twitter?: string;
  website?: string;
  email: string;
}

interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  avatar: string;
  bio: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
  year: string;
  category: string;
}

export interface UserConfig {
  personal: PersonalInfo;
  social: SocialLinks;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  settings: {
    theme: 'classic' | 'modern' | 'custom';
    wallpaper: string;
    defaultWindowSize: {
      width: number;
      height: number;
    };
  };
}

const userConfig: UserConfig = {
  personal: {
    name: "William Hanlon",
    role: "Young Developer",
    location: "United Kingdom",
    avatar: "/assets/images/profile.jpg",
    bio: "Started with minecraft command blocks, evolved into whatever this is."
  },
  social: {
    github: "https://github.com/stackwill",
    email: "williamjhanlon@icloud.com"
  },
  experience: [
    {
      period: "2020 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Company",
      description: "Leading frontend development for various projects."
    },
    {
      period: "2018 - 2020",
      role: "Full Stack Developer",
      company: "Startup",
      description: "Developed and maintained multiple web applications."
    }
  ],
  skills: [
    { name: "TypeScript", level: 30, category: "Frontend", icon: "📘" },
    { name: "Node.js", level: 60, category: "Backend", icon: "🟢" },
    { name: "Python", level: 75, category: "Backend", icon: "🐍" },
    { name: "Docker", level: 50, category: "DevOps", icon: "🐳" },
    { name: "Git", level: 90, category: "Tools", icon: "📚" },
    { name: "Go", level: 75, category: "Backend", icon: "☁️" }
  ],
  projects: [
    {
      title: "PortfolioOS",
      description: "A Windows-style portfolio website built with React and TypeScript. Features window management, custom programs, and retro UI. (What you are viewing lol)",
      technologies: ["React", "TypeScript", "Zustand", "Framer Motion"],
      image: "/assets/images/projects/portfolio-os.png",
      link: "#",
      github: "https://github.com/yourusername/portfolio-os",
      year: "2024",
      category: "Web Development"
    },
    {
      title: "Pow",
      description: "A simple nano-like text editor with syntax highlighting and theming",
      technologies: ["Go"],
      image: "/assets/images/projects/portfolio-os.png",
      link: "#",
      github: "https://github.com/stackwill/pow",
      year: "2025",
      category: "Programs"
    }
    // Add more projects here
  ],
  settings: {
    theme: "classic",
    wallpaper: "/assets/wallpapers/default.jpg",
    defaultWindowSize: {
      width: 800,
      height: 600
    }
  }
};

export default userConfig; 
