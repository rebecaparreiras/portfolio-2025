import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsCarousel = () => {
  return (
    <div className="projects-carousel">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={16}
        loop={projects.length > 2}
        breakpoints={{
          0:   { slidesPerView: 1 }, 
          700: { slidesPerView: 1 }, 
        }}
        aria-label="Projects carousel"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.title} aria-label={`Projeto ${p.title}`}>
            <ProjectCard
              title={p.title}
              description={p.description}
              stacks={p.stacks}
              url={p.url}
              github={p.github}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectsCarousel;
