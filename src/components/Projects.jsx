import React, { useState } from "react";
import { ArrowRight, FolderKanban } from "lucide-react";

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card">
      <div className="project-card__cover">
        {!imgError && project.image ? (
          <img
            src={project.image}
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
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}