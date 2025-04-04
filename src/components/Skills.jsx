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

const skills = [
  { name: "Dart", icon: <SiDart size={75} className="text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter size={75} className="text-blue-400" /> },
  { name: "Php", icon: <SiPhp size={75} className="text-[#474A8A]" /> },
  { name: "Laravel", icon: <SiLaravel size={75} className="text-[#F05340]" /> },
  { name: "HTML5", icon: <FaHtml5 size={75} className="text-[#E34C26]" /> },
  { name: "CSS3", icon: <FaCss3Alt size={75} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={75} className="text-[#f0db4f]" /> },
  { name: "React", icon: <BiLogoReact size={75} className="text-[#61dbfb]" /> },
  { name: "MongoDB", icon: <SiMongodb size={75} className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql size={75} className="text-blue-600" /> },
  { name: "Git", icon: <BiLogoGit size={75} className="text-[#F1502F]" /> },
  {
    name: "Firebase",
    icon: <BiLogoFirebase size={75} className="text-[#F5820D]" />,
  },
  { name: ".NET", icon: <SiDotnet size={75} className="text-blue-500" /> },
];
const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-primary">
      <h2 className="text-3xl font-bold  mb-6 w-3/5 mx-auto text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-4 gap-8 w-3/5 mx-auto">
        {skills.map((skill, id) => (
          <Card
            key={id}
            className="bg-secondary hover:bg-palete3 p-4 text-center w-full aspect-square flex flex-col justify-around items-center"
          >
            {skill.icon}
            <CardContent>{skill.name}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
