import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiDotnet,
  SiMysql,
  SiPhp,
  SiDart,
  SiLaravel,
} from "react-icons/si";
import { Card, CardContent } from "./Card";
import { BiLogoFirebase, BiLogoGit, BiLogoReact } from "react-icons/bi";

const iconSize = 40;
const skills = [
  { name: "Dart", icon: <SiDart size={iconSize} className="text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter size={iconSize} className="text-blue-400" /> },
  { name: "Php", icon: <SiPhp size={iconSize} className="text-[#474A8A]" /> },
  { name: "Laravel", icon: <SiLaravel size={iconSize} className="text-[#F05340]" /> },
  { name: "HTML5", icon: <FaHtml5 size={iconSize} className="text-[#E34C26]" /> },
  { name: "CSS3", icon: <FaCss3Alt size={iconSize} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={iconSize} className="text-[#f0db4f]" /> },
  { name: "React", icon: <BiLogoReact size={iconSize} className="text-[#61dbfb]" /> },
  { name: "MongoDB", icon: <SiMongodb size={iconSize} className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql size={iconSize} className="text-blue-600" /> },
  { name: "Git", icon: <BiLogoGit size={iconSize} className="text-[#F1502F]" /> },
  {
    name: "Firebase",
    icon: <BiLogoFirebase size={iconSize} className="text-[#F5820D]" />,
  },
  { name: ".NET", icon: <SiDotnet size={iconSize} className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-primary">
      <h2 className="text-3xl font-bold mb-6 w-3/5 mx-auto text-center">
        My Skills
      </h2>
      <div className="relative w-3/5 mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex flex-row gap-8">
            {skills.map((skill, id) => (
              <div key={`first-${id}`} className="shrink-0">
                <Card className="bg-white p-4 text-center w-full aspect-square flex flex-col justify-around items-center">
                  {skill.icon}
                </Card>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-8">
            {skills.map((skill, id) => (
              <div key={`second-${id}`} className="shrink-0">
                <Card className="bg-white p-4 text-center w-full aspect-square flex flex-col justify-around items-center">
                  {skill.icon}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
