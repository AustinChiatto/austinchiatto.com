export type ContactIcons = 'github' | 'linkedin' | 'envelope' | 'document';

export interface Contacts {
  id: number;
  label: string;
  url: string;
  icon: ContactIcons;
  caption: string[];
}

export interface Projects {
  id: number;
  name: string;
  desc: string | null;
  image: {
    src: string;
    base64: string;
    alt: string;
  };
  stack: string[];
  url: string;
  repo: string;
}

export interface PortfolioData {
  intro: {
    heading: string;
    subheading: string;
    bio: string;
    employment: string;
  };
  contacts: Contacts[];
  projects: Projects[];
}

export const portfolioData: PortfolioData = {
  intro: {
    heading: 'Austin Chiatto',
    subheading: 'Vancouver, Canada',
    bio: 'I build full-stack tools to solve niche problems, daydream of finding the perfect notes app, and try every day to give more than I take.',
    employment: 'Currently, I work as a front-end developer building websites at Forge and Smith. Previously at Dovetail Digital.'
  },
  contacts: [
    {
      id: 1,
      label: 'Email',
      url: 'mailto:hey@austinchiatto.com',
      icon: 'envelope',
      caption: ['Shoot me an email', 'hey@austinchiatto.com']
    },
    {
      id: 2,
      label: 'Resume',
      url: '#',
      icon: 'document',
      caption: ['Download my resume', 'AustinChiatto_Resume.pdf']
    },
    {
      id: 3,
      label: 'GitHub',
      url: 'https://github.com/AustinChiatto',
      icon: 'github',
      caption: ['Browse my GitHub', 'github.com/AustinChiatto']
    },
    {
      id: 4,
      label: 'LinkedIn',
      url: 'www.linkedin.com/in/austin-chiatto',
      icon: 'linkedin',
      caption: ['View my LinkedIn profile', 'linkedin.com/austin-chiatto']
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Apogee',
      desc: 'Live launch tracking.',
      image: {
        src: '',
        base64: '',
        alt: ''
      },
      stack: ['Next.js', 'TypeScript', 'API'],
      url: 'https://apogee-spaceflight-tracker.vercel.app',
      repo: 'https://github.com/AustinChiatto/apogee-spaceflight-tracker'
    },
    {
      id: 2,
      name: 'Markdown for Apple Notes',
      desc: null,
      image: {
        src: '',
        base64: '',
        alt: ''
      },
      stack: ['Swift'],
      url: '#',
      repo: 'https://github.com/AustinChiatto/mdNotes'
    },
    {
      id: 3,
      name: 'Hex Code Opacity Control',
      desc: null,
      image: {
        src: '',
        base64: '',
        alt: ''
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind'],
      url: 'https://hex-opacity.austinchiatto.com',
      repo: 'https://github.com/AustinChiatto/hex-code-opacity'
    },
    {
      id: 4,
      name: 'Asteroid Run',
      desc: null,
      image: {
        src: '',
        base64: '',
        alt: ''
      },
      stack: ['HTML Canvas', 'JavaScript'],
      url: 'https://asteroidrun.crumb.so/',
      repo: 'https://github.com/AustinChiatto/asteroid-run-2.0.0'
    }
  ]
};
