import Image from "next/image";

const previewStats = ["Responsive", "Dashboard", "Business App"];

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveLink: string;
  codeLink: string;
  image: string;
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="projectCard animateInOnScroll" style={{ animationDelay: `${index * 120}ms` }}>
      <a className="projectImage" href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
        <span className="browserDots" aria-hidden="true"><i /><i /><i /></span>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1400}
          height={788}
        />
      </a>
      <div className="projectContent">
        <p className="eyebrow">Featured project</p>
        <h3>{project.title}</h3>
        <p className="projectSubtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <div className="projectStats" aria-label="Project highlights">
          {previewStats.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="tagList">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="projectActions">
          <a className="primaryButton smallButton" href={project.liveLink} target="_blank" rel="noreferrer">
            Live demo
          </a>
          <a className="secondaryButton smallButton" href={project.codeLink} target="_blank" rel="noreferrer">
            Source code
          </a>
        </div>
      </div>
    </article>
  );
}
