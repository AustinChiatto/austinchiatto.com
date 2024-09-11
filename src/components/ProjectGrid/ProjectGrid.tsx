import { Projects } from '@/data/content';
import { ProjectCard } from './ProjectCard';

type Props = {
  projects: Projects[];
};

const ProjectGrid = ({ projects }: Props) => {
  return (
    <section className="col-span-12 lg:col-span-8 xl:col-span-9 p-4 md:p-6 pl-0 md:pl-0 lg:h-screen lg:max-h-screen overflow-y-scroll">
      <ul className="w-full min-h-full grid grid-cols-12 gap-[0.375rem]">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            url={project.url}
            repo={project.repo}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectGrid;
