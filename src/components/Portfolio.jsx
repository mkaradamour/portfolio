import { useEffect, useState } from "react";
import { FaGooglePlay, FaAppStoreIos, FaGlobe } from "react-icons/fa";
import { Card } from "./Card";
import projects, { isFilled } from "../data/projects";

const linkButtons = [
  { key: "playStore", label: "Google Play", Icon: FaGooglePlay },
  { key: "appStore", label: "App Store", Icon: FaAppStoreIos },
  { key: "website", label: "Website", Icon: FaGlobe },
];

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="bg-primary text-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4 text-palete4">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.gallery.map((image, index) => (
            <a key={image} href={image} target="_blank" rel="noopener">
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                className="w-full object-cover rounded"
              />
            </a>
          ))}
        </div>
        <button
          onClick={onClose}
          className="bg-palete3 text-primary font-semibold px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Tag = ({ children, highlight }) => (
  <span
    className={`rounded-full px-3 py-1 text-sm font-medium ${
      highlight ? "bg-palete3 text-primary" : "bg-palete2 text-white"
    }`}
  >
    {children}
  </span>
);

const ProjectCard = ({ project, onOpenGallery }) => {
  const links = linkButtons.filter(({ key }) => isFilled(project.links[key]));

  return (
    <Card
      className={`bg-primary rounded-3xl p-6 flex flex-col gap-4 ${
        project.featured ? "md:col-span-2 border-2 border-palete3" : ""
      }`}
    >
      <div className="flex flex-row items-start gap-4">
        <img
          src={project.image}
          alt={`${project.title} logo`}
          loading="lazy"
          className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl object-cover bg-white"
        />
        <div className="flex flex-col gap-2 min-w-0">
          {project.featured && (
            <span className="text-sm font-bold uppercase tracking-wide text-palete3">
              Featured · Government client
            </span>
          )}
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-palete4">{project.client}</p>
          <div className="flex flex-wrap gap-2">
            <Tag highlight={project.featured}>{project.sector}</Tag>
            <Tag>{project.category}</Tag>
          </div>
        </div>
      </div>

      <p className="text-white text-lg">{project.description}</p>
      <p className="text-white">
        <span className="font-semibold text-palete3">Result: </span>
        {project.result}
      </p>

      <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded border border-palete4/40 px-2 py-0.5 text-sm text-palete4">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {links.map(({ key, label, Icon }) => (
          <a
            key={key}
            href={project.links[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-palete3 px-4 py-2 font-semibold text-primary hover:bg-[#FDB43F]"
          >
            <Icon aria-hidden="true" /> {label}
          </a>
        ))}
        {project.gallery.length > 0 && (
          <button
            type="button"
            onClick={() => onOpenGallery(project)}
            className="inline-flex items-center gap-2 rounded border-2 border-palete3 px-4 py-2 font-semibold text-white hover:bg-palete3 hover:text-primary"
          >
            Screenshots
          </button>
        )}
      </div>
    </Card>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="flex flex-col gap-12 px-6 py-24">
      <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpenGallery={setSelectedProject} />
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
