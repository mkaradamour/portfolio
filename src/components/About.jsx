import {motion} from 'motion/react';

const About = () => {
  return (
    <section id="about" className="mx-auto px-6 py-24 ">
      <h2 className="text-3xl font-bold  mb-6 w-3/5  mx-auto text-center text-palete3">
          About
        </h2>
      <div className="flex flex-row items-start w-3/5 mx-auto">
       
        <motion.div className="w-full" initial={"hidden"} whileInView={"visible"} variants={{visible:{opacity:1,y:0,transition:{type: "spring"}},hidden:{opacity:0,y:80}}}>
          {/* <h3 className="text-2xl font-semibold">Profile</h3> */}
          <p className="text-white text-xl">
            Innovative and results-driven Software Developer with 7+ years of
            experience creating dynamic mobile applications and robust backend
            solutions. Skilled in utilizing Flutter and Dart to develop engaging
            cross-platform mobile applications, collaborating closely with
            clients to deliver solutions that enhance user experience and
            engagement. Proficient in a wide range of tools and languages
            including Firebase, React, PHP, MySQL, and Laravel for secure and
            efficient data handling. Experienced in leveraging VB.NET and C# for
            backend logic and automation, ensuring robust software performance
            and data accuracy. Proven track record of leading key projects and
            collaborating with cross-functional teams to enhance operational
            efficiency and financial accuracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
