import { Card } from "./Card";
import { useT } from "../i18n";

// Career timeline, newest first. Entries live in the locale files so titles, dates and bullets are translated.
const Experience = () => {
  const { t } = useT();
  return (
    <section id="experience" className="flex flex-col gap-12 px-6 pb-24">
      <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
        {t("experience.title")}
      </h2>
      <ol className="container mx-auto max-w-3xl flex flex-col gap-6 border-s-2 border-palete3/40 ps-6">
        {t("experience.items").map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              className="absolute -start-[33px] top-7 w-4 h-4 rounded-full bg-palete3 ring-4 ring-secondary"
              aria-hidden="true"
            />
            <Card className="bg-primary rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm font-semibold text-palete3"><bdi>{job.period}</bdi></span>
              </div>
              <p className="text-palete4 font-medium"><bdi>{job.company}</bdi></p>
              <ul className="list-disc ps-5 text-white space-y-1">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.projects && (
                <p className="text-sm text-palete4">
                  <span className="font-semibold text-palete3">{t("experience.projects")} </span>
                  <bdi>{job.projects}</bdi>
                </p>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
