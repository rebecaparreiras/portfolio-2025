import ProjectsCarousel from '../components/ProjectsCarousel';

const ProjectsSection = () => {
  return (
    <>
      <div className="projects-title">
        <h1>Projetos</h1>
      </div>

      <div className="projects-info">
        <p>Portfólio criado com:</p>
        <div className="portfolio-stacks">
          <button>HTML</button>
          <button>SASS</button>
          <button>ReactJS</button>
          <button>TypeScript</button>
        </div>
      </div>

      {/* Carousel */}
      <ProjectsCarousel />
    </>
  )
}

export default ProjectsSection;
