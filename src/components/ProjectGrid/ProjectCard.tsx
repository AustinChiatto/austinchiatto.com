'use client';
import { useState } from 'react';
import { robotoMono } from '@/fonts';
import Badge from '../Badge';

type Props = {
  desc: string | null;
  url: string;
  stack: string[];
  name: string;
  repo: string;
};

// todo: add useEffect for hover, instant trigger is too jarring
// todo: implement github api integration

export const ProjectCard = ({ desc, url, stack, name, repo }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectMedia = (
    <figure className="block absolute overflow-hidden rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <a
        href={url}
        target="_blank"
      >
        project image
      </a>
    </figure>
  );

  const repoStatus = (
    <a
      href={repo}
      className={`block min-w-fit h-fit absolute right-0 top-0 flex flex-nowrap z-1 whitespace-nowrap pl-2 gap-2 items-center justify-end bg-background rounded-sm transition-all ${
        isOpen ? 'opacity-1' : 'translate-x-1 opacity-0 blur-xs pointer-events-none'
      }`}
    >
      <p
        className={`text-xs  text-center`}
        style={{ fontFamily: robotoMono.style.fontFamily }}
      >
        <span className="text-foreground">4c76284</span> · 4 months ago
      </p>
      <Badge
        label="repo"
        alt
      />
    </a>
  );

  const projectStack = (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative block w-fit"
    >
      {repoStatus}
      <ul className={`h-fit flex gap-2 justify-end transition-all ${isOpen ? 'opacity-0 blur-xs pointer-events-none' : ''}`}>
        {stack.map((tech, i) => (
          <li key={i}>
            <Badge label={tech} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <li
      className={`relative rounded-lg p-6 flex flex-col justify-between ${
        desc !== null ? 'col-span-12 aspect-[1.5/1]' : 'col-span-6 aspect-square'
      } bg-secondary-background`}
    >
      <div>
        <h3 className="text-foreground">{name}</h3>
        {desc && <p>{desc}</p>}
      </div>
      {projectMedia}
      <div className="w-full flex justify-end">{projectStack}</div>
    </li>
  );
};

export default ProjectCard;
