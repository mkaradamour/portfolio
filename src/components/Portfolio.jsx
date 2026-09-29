import { useEffect, useRef, useState } from "react";
import { FaGooglePlay, FaAppStoreIos, FaGlobe, FaTimes } from "react-icons/fa";
import { Card } from "./Card";
import projects, { isFilled } from "../data/projects";
import { useT, locales } from "../i18n";

const linkButtons = [
  { key: "playStore", Icon: FaGooglePlay },
  { key: "appStore", Icon: FaAppStoreIos },
  { key: "website", Icon: FaGlobe },
];

// Overlay the current locale's translated fields (portfolio.projects.<title>) on the English project data.
const useLocalized = (project) => {
  const { locale } = useT();
  return { ...project, ...locales[locale].portfolio?.projects?.[project.title] };
};

const Label = ({ children }) => (
  <span className="block text-sm font-bold uppercase tracking-wide text-palete3">{children}</span>
);

const Tag = ({ children, highlight }) => (
  <span
    className={`rounded-full px-3 py-1 text-sm font-medium ${
      highlight ? "bg-palete3 text-primary" : "bg-palete2 text-white"
    }`}
  >
    {children}
  </span>
);

const StackList = ({ stack }) => {
  const { t } = useT();
  return (
    <ul className="flex flex-wrap gap-2" aria-label={t("portfolio.stack")}>
      {stack.map((tech) => (
        <li key={tech} className="rounded border border-palete4/40 px-2 py-0.5 text-sm text-palete4">
          {tech}
        </li>
      ))}
    </ul>
  );
};

const StoreLinks = ({ project }) => {
  const { t } = useT();
  return linkButtons
    .filter(({ key }) => isFilled(project.links[key]))
    .map(({ key, Icon }) => (
      <a
        key={key}
        href={project.links[key]}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded bg-palete3 px-4 py-2 font-semibold text-primary hover:bg-[#FDB43F]"
      >
        <Icon aria-hidden="true" /> {t(`portfolio.links.${key}`)}
      </a>
    ));
};

// Logo, title, client and sector/category tags — shared by the card and the modal.
const ProjectHeader = ({ project, as: Heading = "h3", headingId, lazy = true }) => {
  const { t } = useT();
  const sector = t("portfolio.sectors")[project.sector] ?? project.sector;
  const category = t("portfolio.categories")[project.category] ?? project.category;

  return (
    <div className="flex flex-row items-start gap-4">
      <img
        src={project.image}
        alt={t("portfolio.logoAlt", { title: project.title })}
        loading={lazy ? "lazy" : "eager"}
        className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl object-cover bg-white"
      />
      <div className="flex flex-col gap-2 min-w-0">
        {project.featured && (
          <span className="text-sm font-bold uppercase tracking-wide text-palete3">
            {t("portfolio.featured")}
          </span>
        )}
        <Heading id={headingId} className="text-2xl font-bold text-white">{project.title}</Heading>
        {isFilled(project.client) && <p className="text-palete4"><bdi>{project.client}</bdi></p>}
        <div className="flex flex-wrap gap-2">
          {isFilled(project.sector) && <Tag highlight={project.featured}>{sector}</Tag>}
          <Tag>{category}</Tag>
        </div>
      </div>
    </div>
  );
};

// "My role: …" and verified numbers on the card, so the role is clear without opening the details.
const RoleLine = ({ project }) => {
  const { t } = useT();
  if (!isFilled(project.roleTitle)) return null;
  return (
    <p className="text-white">
      <span className="font-semibold text-palete3">{t("portfolio.myRole")} </span>
      <bdi className="font-semibold">{project.roleTitle}</bdi>
    </p>
  );
};

const Metrics = ({ metrics }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-palete3">
    {metrics.map((metric) => (
      <li key={metric} dir="ltr">{metric}</li>
    ))}
  </ul>
);

const BulletList =({ label, items }) => (
  <div>
    <Label>{label}</Label>
    <ul className="list-disc ps-5 text-white space-y-1">
      {items.map((item) => (
        <li key={item} className="[unicode-bidi:plaintext]">{item}</li>
      ))}
    </ul>
  </div>
);

// Problem / Key features / My role / What I built / Result — each part renders only once it has real content.
const CaseStudy = ({ project }) => {
  const { t } = useT();
  const features = (project.features ?? []).filter(isFilled);
  const built = (project.built ?? []).filter(isFilled);
  const responsibilities = (project.responsibilities ?? []).filter(isFilled);

  return (
    <>
      {isFilled(project.problem) && (
        <div>
          <Label>{t("portfolio.problem")}</Label>
          <p className="text-white [unicode-bidi:plaintext]">{project.problem}</p>
        </div>
      )}
      {features.length > 0 && <BulletList label={t("portfolio.features")} items={features} />}
      {(isFilled(project.role) || responsibilities.length > 0) && (
        <div className="flex flex-col gap-2">
          <Label>{t("portfolio.role")}</Label>
          {isFilled(project.roleTitle) && (
            <p className="text-white font-semibold"><bdi>{project.roleTitle}</bdi></p>
          )}
          {isFilled(project.role) && <p className="text-white [unicode-bidi:plaintext]">{project.role}</p>}
          {responsibilities.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label={t("portfolio.responsibilities")}>
              {responsibilities.map((item) => (
                <li key={item} dir="ltr" className="rounded-full bg-palete2 px-3 py-1 text-sm font-medium text-white">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {built.length > 0 && <BulletList label={t("portfolio.built")} items={built} />}
      {isFilled(project.result) && (
        <p className="text-white">
          <span className="font-semibold text-palete3">{t("portfolio.result")} </span>
          <bdi>{project.result}</bdi>
        </p>
      )}
    </>
  );
};

const Modal = ({ project: baseProject, onClose }) => {
  const { t } = useT();
  const project = useLocalized(baseProject);
  const closeRef = useRef(null);
  const stack = project.stack.filter(isFilled);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative bg-primary text-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("portfolio.close")}
          className="absolute top-4 end-4 rounded-full p-2 text-palete4 hover:bg-palete2 hover:text-white"
        >
          <FaTimes aria-hidden="true" />
        </button>

        <ProjectHeader project={project} as="h2" headingId="project-modal-title" lazy={false} />
        <p className="text-palete4 text-lg [unicode-bidi:plaintext]">{project.description}</p>
        <CaseStudy project={project} />

        {stack.length > 0 && (
          <div className="flex flex-col gap-2">
            <Label>{t("portfolio.stack")}</Label>
            <StackList stack={stack} />
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <StoreLinks project={project} />
        </div>

        {project.gallery.length > 0 && (
          <div className="flex flex-col gap-2">
            <Label>{t("portfolio.screenshots")}</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <a key={image} href={image} target="_blank" rel="noopener">
                  <img
                    src={image}
                    alt={t("portfolio.screenshotAlt", { title: project.title, n: index + 1 })}
                    loading="lazy"
                    className="w-full object-cover rounded"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const hasDetails = (project) =>
  project.gallery.length > 0 ||
  [project.problem, project.role, project.result].some(isFilled) ||
  [...(project.features ?? []), ...(project.built ?? []), ...(project.responsibilities ?? [])].some(isFilled);

const ProjectCard = ({ project: baseProject, onOpen }) => {
  const { t } = useT();
  const project = useLocalized(baseProject);
  const stack = project.stack.filter(isFilled);
  const metrics = (project.metrics ?? []).filter(isFilled);

  return (
    <Card
      className={`bg-primary rounded-3xl p-6 flex flex-col gap-4 ${
        project.featured ? "md:col-span-2 border-2 border-palete3" : ""
      }`}
    >
      <ProjectHeader project={project} />
      <p className="text-white text-lg [unicode-bidi:plaintext]">{project.description}</p>
      <RoleLine project={project} />
      {metrics.length > 0 && <Metrics metrics={metrics} />}
      {stack.length > 0 && <StackList stack={stack} />}

      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {hasDetails(project) && (
          <button
            type="button"
            onClick={() => onOpen(baseProject)}
            className="inline-flex items-center gap-2 rounded border-2 border-palete3 px-4 py-2 font-semibold text-white hover:bg-palete3 hover:text-primary"
          >
            {t("portfolio.details")}
          </button>
        )}
        <StoreLinks project={project} />
      </div>
    </Card>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useT();

  return (
    <section id="portfolio" className="flex flex-col gap-12 px-6 py-24">
      <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
        {t("portfolio.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
