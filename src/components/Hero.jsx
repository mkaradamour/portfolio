import { ReactTyped } from "react-typed";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen w-full relative bg-primary justify-center items-center py-24"
    >
      <div className="relative w-60 h-60 rounded-full overflow-clip after:absolute after:inset-0 after:block after:bg-black after:opacity-20">
        <img
          src="profile-nobg.png"
          alt="profile image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center z-30 ">
        <h2 className="text-5xl md:text-6xl text-white font-bold ">Hello,</h2>
        <h2 className="text-5xl md:text-6xl text-white font-bold text-center">
          I'm Mohanad Karadamour
        </h2>
        <h3 className="text-4xl md:text-5xl text-palete3 font-semibold text-center">
          <ReactTyped
            strings={[
              "Flutter Developer",
              "Web Developer",
              "Desktop developer",
            ]}
            typeSpeed={100}
            loop={true}
          />
        </h3>
        <div className="flex flex-row items-center justify-center gap-4">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button className="mt-6 bg-palete3 text-palete5">Let's connect</Button>
          </ScrollLink>
          <a href="/mohanad-karadamour-resume.pdf" target="_blank" download>
            <Button className="mt-6 bg-palete3 text-palete5">Download resume</Button>
          </a>
        </div>


      </div>
    </section>
  );
};

export default Hero;
