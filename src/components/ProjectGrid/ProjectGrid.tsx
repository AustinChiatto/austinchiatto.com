import { Projects } from '@/data/content';
import { ProjectCard } from './ProjectCard';
import { fetchCommits } from '@/data/github-api';

type Props = {
  projects: Projects[];
};

const ProjectGrid = async ({ projects }: Props) => {
  const recentCommits = await fetchCommits();
  return (
    <section className="col-span-12 lg:col-span-8 xl:col-span-9 p-4 md:p-6 lg:pl-0 pb-[6rem] md:pb-[6rem] lg:pb-6 lg:h-screen lg:max-h-screen overflow-y-scroll">
      <ul className="w-full min-h-full grid grid-cols-12 gap-[0.375rem]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            url={project.url}
            repo={project.repo}
            image={project.image}
            commit={recentCommits[project.id]}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectGrid;
