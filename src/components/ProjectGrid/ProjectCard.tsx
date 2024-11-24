'use client';
import { useState } from 'react';
import { robotoMono } from '@/data/fonts';
import Badge from '../Badge';
import Image from 'next/image';

type Props = {
  desc: string | null;
  url: string;
  stack: string[];
  name: string;
  repo: string;
  commit: {
    repo: string;
    sha: string;
    date: string;
  };
  image: {
    src: string;
    base64: string;
    alt: string;
  };
};

export const ProjectCard = ({ desc, url, stack, name, repo, commit, image }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectMedia = (
    <a
      href={url}
      className={`block relative rounded-xs md:rounded-sm overflow-hidden transition-all ease-fling duration-[200ms] drop-shadow-md hover:drop-shadow-lg hover:-translate-y-1 max-w-[70%] max-h-[50%] ${
        desc ? 'md:max-w-[60%] md:max-h-[70%] lg:max-w-[60%] lg:max-h-[70%] xl:max-w-[100%] xl:max-h-[80%]' : ''
      } `}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={300}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain'
        }}
      />
    </a>
  );

  const repoStatus = (
    <a
      href={repo}
      className={`block min-w-fit h-fit absolute right-0 top-0 flex flex-nowrap z-1 whitespace-nowrap pl-2 gap-2 items-center justify-end bg-background rounded-sm transition-all duration-300 ${
        isOpen ? 'opacity-1' : 'translate-x-1 opacity-0 blur-xs pointer-events-none'
      }`}
    >
      <p
        className={`text-xs text-center px-2`}
        style={{ fontFamily: robotoMono.style.fontFamily }}
      >
        <span className="text-foreground">{commit.sha}</span> · {commit.date}
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
      <ul className={`h-fit flex gap-2 justify-end transition-all duration-300 ${isOpen ? 'opacity-0 blur-xs pointer-events-none' : ''}`}>
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
      className={`relative overflow-hidden rounded-lg p-6 flex flex-col justify-between ${
        desc !== null ? 'col-span-12 aspect-square md:aspect-[1.5/1]' : 'col-span-12 md:col-span-6 aspect-square'
      } bg-secondary-background`}
    >
      <div>
        <h3 className="text-foreground">{name}</h3>
        {desc && <p>{desc}</p>}
      </div>
      <div className="absolute inset-0 grid place-items-center">{projectMedia}</div>
      <div className="w-full flex justify-end">{projectStack}</div>
    </li>
  );
};

export default ProjectCard;
