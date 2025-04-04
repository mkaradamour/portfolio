import { ReactTyped } from "react-typed";
import Button from "./Button";

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
        <h2 className="text-6xl text-white font-bold ">Hello,</h2>
        <h2 className="text-6xl text-white font-bold">
          I'm Mohanad Karadamour
        </h2>
        <h3 className="text-5xl text-palete3 font-semibold">
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
        <Button className="mt-6 bg-palete3 text-palete5">Let's connect</Button>
      </div>
    </section>
  );
};

export default Hero;
