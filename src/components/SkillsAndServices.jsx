import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
    SiFlutter,
    SiMongodb,
    SiDotnet,
    SiMysql,
    SiPhp,
    SiDart,
    SiLaravel,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
    SiGit,
} from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { useT } from "../i18n";

const skills = [
    { name: "Flutter", Icon: SiFlutter, color: "text-[#02569B]" },
    { name: "Dart", Icon: SiDart, color: "text-[#0175C2]" },
    { name: "PHP", Icon: SiPhp, color: "text-[#474A8A]" },
    { name: "Laravel", Icon: SiLaravel, color: "text-[#F05340]" },
    { name: "MySQL", Icon: SiMysql, color: "text-[#00758F]" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#13AA52]" },
    { name: "Firebase", Icon: SiFirebase, color: "text-[#F5820D]" },
    { name: "React", Icon: FaReact, color: "text-[#149ECA]" },
    { name: "JavaScript", Icon: FaJs, color: "text-[#C9A800]" },
    { name: "HTML5", Icon: FaHtml5, color: "text-[#E34C26]" },
    { name: "CSS3", Icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: ".NET", Icon: SiDotnet, color: "text-[#512BD4]" },
    { name: "Git", Icon: SiGit, color: "text-[#F1502F]" },
];

const services = [
    {
        key: "mobile",
        Icon: SiFlutter,
        iconColor: "text-[#02569B]",
        tech: [
            { name: "Flutter", Icon: SiFlutter },
            { name: "Dart", Icon: SiDart },
            { name: "Firebase", Icon: SiFirebase },
        ],
    },
    {
        key: "backend",
        Icon: SiLaravel,
        iconColor: "text-[#F05340]",
        tech: [
            { name: "PHP", Icon: SiPhp },
            { name: "Laravel", Icon: SiLaravel },
            { name: "MySQL", Icon: SiMysql },
        ],
    },
    {
        key: "frontend",
        Icon: FaReact,
        iconColor: "text-[#149ECA]",
        tech: [
            { name: "React", Icon: FaReact },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Tailwind", Icon: SiTailwindcss },
        ],
    },
];

const SkillsAndServices = () => {
    const { t } = useT();
    return (
        <section id="skills" className="flex flex-col gap-12 px-6 py-24 bg-primary">
            <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
                {t("services.title")}
            </h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(({ key, Icon, iconColor, tech }) => (
                        <Card key={key} className="bg-palete2 rounded-xl">
                            <CardHeader>
                                <div className="w-14 h-14 shrink-0 bg-white rounded-lg flex items-center justify-center mb-6">
                                    <Icon size={32} className={iconColor} aria-hidden="true" />
                                </div>
                                <CardTitle>{t(`services.${key}.title`)}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="px-6 pb-6">
                                    <p className="text-white mb-6">{t(`services.${key}.description`)}</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {tech.map(({ name, Icon: TechIcon }) => (
                                            <li
                                                key={name}
                                                className="flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-palete4"
                                            >
                                                <TechIcon aria-hidden="true" /> {name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <h2 className="text-3xl font-bold container mx-auto text-center text-palete3">
                {t("skills.title")}
            </h2>
            <ul className="container mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
                {skills.map(({ name, Icon, color }) => (
                    <li key={name} className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                            <Icon size={40} className={color} aria-hidden="true" />
                        </div>
                        <span className="text-palete4 text-sm font-medium" dir="ltr">{name}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SkillsAndServices;
