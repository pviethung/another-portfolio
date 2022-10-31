import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="flex max-w-md md:max-w-none px-10 md:px-0 flex-col md:flex-row mx-auto gap-4 mt-14">
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
    </div>
  );
};
export default Projects;
