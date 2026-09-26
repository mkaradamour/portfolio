import { Link as ScrollLink } from "react-scroll";
import { HEADER_OFFSET } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen w-full relative bg-primary justify-center items-center gap-6 px-6 pt-32 pb-24"
    >
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-clip after:absolute after:inset-0 after:block after:bg-black after:opacity-20">
        <img
          src="/profile-nobg.png"
          alt="Mohanad Karadamour"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-4">
        <p className="text-lg md:text-xl text-palete4 font-medium">Mohanad Karadamour</p>
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
          Senior Flutter &amp; Full-Stack Developer
        </h1>
        <p className="text-lg md:text-2xl text-palete3 font-semibold">
          7+ years · 12 shipped apps · Government &amp; fintech clients
        </p>
        <p className="inline-flex items-center gap-2 rounded-full border border-palete3 bg-palete1 px-4 py-2 text-base text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" aria-hidden="true" />
          Open to relocation to Saudi Arabia — available immediately
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-2">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={HEADER_OFFSET}
            href="#contact"
            className="cursor-pointer px-4 py-2 rounded border-2 border-palete3 bg-palete3 text-primary font-semibold text-lg hover:bg-[#FDB43F]"
          >
            Let&apos;s connect
          </ScrollLink>
          <a
            href="/mohanad-karadamour-resume.pdf"
            target="_blank"
            rel="noopener"
            download
            className="px-4 py-2 rounded border-2 border-palete3 text-white font-semibold text-lg hover:bg-palete3 hover:text-primary"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
