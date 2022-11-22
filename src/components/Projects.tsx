import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-md md:max-w-none px-10 md:px-0 mx-auto mt-14">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          desc={project.desc}
          imageSrc={project.src}
          title={project.title}
          tags={project.tags}
          demo={project.demo}
          code={project.code}
        />
      ))}
      <a
        target={'_blank'}
        title="https://github.com/pviethung"
        href="https://github.com/pviethung"
        className="flex items-center justify-center flex-col"
      >
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z" />
        </svg>
        <p className="text-stone-900">View more</p>
      </a>
    </div>
  );
};
export default Projects;
