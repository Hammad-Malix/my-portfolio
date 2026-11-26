import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp, FolderKanban } from "lucide-react";

const INITIAL_PROJECT_COUNT = 4;

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card">
      <div className="project-card__cover">
        {!imgError && project.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={project.title}
            className="project-card__img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__fallback">
            <FolderKanban size={36} />
            <span>{project.category}</span>
          </div>
        )}
        <span className="project-card__badge">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-purple">
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="project-card__links">
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__cta"
            >
              <span>View Project</span>
              <ArrowRight size={14} />
            </a>

            {project.liveUrl && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__source"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="projects" className="section section--white">
      <div className="container">
        <div className="section-header">
          <span className="pill-eyebrow">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my approach to design and
            development.
          </p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > INITIAL_PROJECT_COUNT && (
          <div className="projects-toggle-wrap">
            <button
              type="button"
              className="btn btn--outline projects-toggle"
              onClick={() => setShowAllProjects((isExpanded) => !isExpanded)}
              aria-expanded={showAllProjects}
            >
              {showAllProjects ? (
                <>
                  <span>Show fewer projects</span>
                  <ArrowUp size={16} />
                </>
              ) : (
                <>
                  <span>See {projects.length - INITIAL_PROJECT_COUNT} more projects</span>
                  <ArrowDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}