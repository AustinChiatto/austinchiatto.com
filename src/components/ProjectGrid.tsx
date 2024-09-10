import { Projects } from '@/data/content';

type Props = {
  projects: Projects[];
};

const ProjectGrid = ({ projects }: Props) => {
  return (
    <section className="col-span-12 lg:col-span-8 xl:col-span-9 p-4 md:p-6 pl-0 md:pl-0 lg:h-screen lg:max-h-screen overflow-y-scroll">
      <ul className="w-full min-h-full grid grid-cols-12 gap-[0.375rem]">
        {projects.map((project, id) => (
          <li
            key={id}
            className={`responsive rounded-lg p-6 flex flex-col justify-between ${
              project.desc !== null ? 'col-span-12 aspect-[1.5/1]' : 'col-span-6 aspect-square'
            } bg-secondary-background`}
          >
            <div>
              <h3 className="text-foreground">{project.name}</h3>
              {project.desc && <p>{project.desc}</p>}
            </div>
            <div className="w-full">
              <ul className="flex gap-2 justify-end">
                {project.stack.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectGrid;
