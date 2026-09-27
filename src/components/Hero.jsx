import { Link as ScrollLink } from "react-scroll";
import { HEADER_OFFSET } from "../constants";
import { useT } from "../i18n";
import { useContactIntent } from "../contactIntent";

const ctas = [
  { key: "hire", intent: "fulltime" },
  { key: "build", intent: "project" },
  { key: "talk", intent: "partnership" },
];

const Hero = () => {
  const { t } = useT();
  const [, setIntent] = useContactIntent();
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen w-full relative bg-primary justify-center items-center gap-6 px-6 pt-32 pb-24"
    >
      <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-clip border-4 border-palete3">
        <img
          src="/profile-hero.webp"
          alt="Mohanad Karadamour"
          width="600"
          height="600"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-4">
        <p className="text-lg md:text-xl text-palete4 font-medium">{t("hero.name")}</p>
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-white">
          {t("hero.tagline")}
        </p>
        <p className="text-lg md:text-2xl text-palete3 font-semibold">
          {t("hero.stats")}
        </p>
        <p className="inline-flex items-center gap-2 rounded-full border border-palete3 bg-palete1 px-4 py-2 text-base text-white">
          <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-green-400" aria-hidden="true" />
          {t("hero.badge")}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 mt-2 w-full sm:w-auto">
          {ctas.map(({ key, intent }, i) => (
            <ScrollLink
              key={key}
              to="contact"
              smooth={true}
              duration={500}
              offset={HEADER_OFFSET}
              href="#contact"
              onClick={() => setIntent(intent)}
              className={`cursor-pointer text-center px-4 py-2 rounded border-2 border-palete3 font-semibold text-lg ${
                i === 0
                  ? "bg-palete3 text-primary hover:bg-[#FDB43F]"
                  : "text-white hover:bg-palete3 hover:text-primary"
              }`}
            >
              {t(`hero.cta.${key}`)}
            </ScrollLink>
          ))}
        </div>
        <a
          href="/mohanad-karadamour-resume.pdf"
          target="_blank"
          rel="noopener"
          download
          className="text-palete4 underline underline-offset-4 hover:text-palete3"
        >
          {t("hero.resume")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
