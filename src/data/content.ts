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
    employment: {
      text: string;
      link?: {
        url: string;
        label: string;
      };
    }[];
  };
  contacts: Contacts[];
  projects: Projects[];
}

export const portfolioData: PortfolioData = {
  intro: {
    heading: 'Austin Chiatto',
    subheading: 'Sofware Developer',
    bio: 'I build full-stack tools to solve problems, daydream of finding the perfect notes app, and try every day to give more than I take.',
    employment: [
      { text: 'Currently, I work as a front-end developer building websites at ' },
      { text: 'Forge and Smith', link: { url: 'https://forgeandsmith.com', label: 'Forge and Smith' } },
      { text: '. Previously at ' },
      { text: 'Dovetail Digital', link: { url: 'https://www.dovetaildigital.ca', label: 'Dovetail Digital' } },
      { text: '.' }
    ]
  },
  contacts: [
    {
      id: 0,
      label: 'Email',
      url: 'mailto:hey@austinchiatto.com',
      icon: 'envelope',
      caption: ['Shoot me an email', 'hey@austinchiatto.com']
    },
    {
      id: 1,
      label: 'GitHub',
      url: 'https://github.com/AustinChiatto',
      icon: 'github',
      caption: ['Browse my GitHub', 'github.com/AustinChiatto']
    },
    {
      id: 2,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/austin-chiatto/',
      icon: 'linkedin',
      caption: ['View my LinkedIn profile', 'linkedin.com/austin-chiatto']
    }
  ],
  projects: [
    {
      id: 0,
      name: 'Apogee',
      desc: 'Live launch tracking.',
      image: {
        src: '/images/apogee-thumb.png',
        base64:
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAABwAAAADD6HxEAAAArklEQVQIHSWNzQ7BUBCFZ+ZWaGKBRrBoqEo0fQ2xs+C5PAOPhiWxEKJ/XB3nprOZzDnfOcNhOC2q/Pl4KRETiYiqCrGS+L7PIh5ueEZkPovysrhd707gmkAzM6kIGSaz3W3W65WjYatA8bCMAQNIjTGe4ED/zxFIo6SZybibpkm8iIZBBwbGhYLByFrbsMky/nz1dDlT7aLOPh72RUl+W4rKZu9WP+jhC/rwKMuyP6QGU1SIhSbFAAAAAElFTkSuQmCC',
        alt: 'SpaceX Starlink mission launch countdown interface showing rocket fairing with progress bar and mission details'
      },
      stack: ['Next.js', 'TypeScript', 'API'],
      url: 'https://apogee-spaceflight-tracker.vercel.app',
      repo: 'https://github.com/AustinChiatto/apogee'
    },
    {
      id: 1,
      name: 'Markdown for Apple Notes',
      desc: null,
      image: {
        src: '/images/mdNotes-icon.png',
        base64:
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACgAAAAA7eLj1AAAA/ElEQVQYGSWPu04DQQxFbc+EBSUdzXbQBCFR8hMUgMSP8FfUUTrKSPQ0PAqQeEgg8dCyiyIyO7NjGw+487Wvrw+qqogAiCoSAQAhKqiygHPOF4E/dHglUUAEk00TBxKZQ9nX8ASxfWhSs/y5eB5pXOrwhczp5cyL5KyTtt+Y3Y0j4+Xb5DOsH+4EwNFKtz2io/EuEcKaHE8xOTza37R0C/Bbp3/HVb9Xsnh081u4eof5NeacmDGlhPZ2CMGWZzf+ZC+f3+PBtHituq6zD9jGhYNQsQD+zwy4aZoCZgdYGAzeKFSJyDxm7fveWxNjbNvWmmEYEC04m1hVVV3Xv2aRoKE6egztAAAAAElFTkSuQmCC',
        alt: 'Markdown app icon featuring a blue hashtag symbol on a white rounded square background'
      },
      stack: ['Swift'],
      url: 'https://markintosh-for-mac.vercel.app/',
      repo: 'https://github.com/AustinChiatto/Markintosh'
    },
    {
      id: 2,
      name: 'Hex code opacity control',
      desc: null,
      image: {
        src: '/images/hex-opacity-thumb.png',
        base64:
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAABQAAAAC5KC8kAAAAg0lEQVQIHSVNOQ7CMBDcsY0sxRRpokgp7QoEBS/gtzzEL+AfNEa4IYhdJmKr2TlxPSyXZS8iML3dH2/FMAytNTIxxhC8h4lBxHkRW9ePqFHjqSpyzr13onmezSyl9NdKKbVWTNPEH8DmBRg1OCaJ6Q6n4/n52pbYz5Xgdl9buURmHMcfPVo0R83Ty/cAAAAASUVORK5CYII=',
        alt: 'Hex color opacity tool interface showing color FF7D2F with 86% opacity slider'
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind'],
      url: 'https://hex-opacity.austinchiatto.com',
      repo: 'https://github.com/AustinChiatto/hex-code-opacity'
    },
    {
      id: 3,
      // id: 4,
      name: 'Browser based game',
      desc: null,
      image: {
        src: '/images/asteroid-run-thumb.png',
        base64:
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAABwAAAADD6HxEAAAAlUlEQVQIHS2MzQrCQAyE87PRhdKTF9GbHnzQ4tsqUkEqbpMxK0KY5JthohsbVK3WUVgO+6M7VGwcdpfzaZ6fmhkRWaksWJuzlABbsfvj5oGSGTOnuocIeXhia+29fhgkCQAigghmFmg56WQhw/K/OtGyvECgAGnH3u47r59Gfk5LesjoHk/TFfAi2zUaQYgjtah2JPoC0ZhNMnsRFmsAAAAASUVORK5CYII=',
        alt: 'Asteroid Run game title screen showing a spaceship against a starry background with the text "How long will you survive?"'
      },
      stack: ['HTML Canvas', 'JavaScript'],
      url: 'https://asteroid-run.vercel.app/',
      repo: 'https://github.com/AustinChiatto/asteroid-run-2.0.0'
    },
    {
      id: 4,
      // id: 5,
      name: 'Retro emulator themes',
      desc: null,
      image: {
        src: '/images/scallion-theme-thumb.png',
        base64:
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAABwAAAADD6HxEAAAA3ElEQVQIHR3MQU6DQBQA0P+ByTgbgygdTDEkuDAGaVi7MY02vY5ncOtNXHoDw9pq4paEhYENaNoANWUy862+Azx8eLxn3EIkRDx2p89PL0VRCCEArCCYOMoMBrR7cKTRbH+6tm3LsozjuO97Im0ZAK31Tg2j2hEAISilqupzs+n2n+Mfxraj4J9g7uL2bipP0baMgb/8PJzleT6f36zePtLrWXLBu25YLhevq/csyxwpZZJcRlFUVV+e53HOrtI0CIKzMJSTE6zreh83TeP7PmOMiNbrbyJbCD6O4y+6AloeMHaT2wAAAABJRU5ErkJggg==',
        alt: 'Light and dark themes for a retro gaming handheld interface showing isometric Game Boy icons'
      },
      stack: ['Figma', 'JSON'],
      url: 'https://github.com/OnionUI/Themes/pull/42',
      repo: 'https://github.com/AustinChiatto/Themes'
    }
  ]
};
