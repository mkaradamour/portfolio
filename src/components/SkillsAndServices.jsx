import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
    SiFlutter,
    SiMongodb,
    SiDotnet,
    SiMysql,
    SiPhp,
    SiDart,
    SiLaravel,
    SiTypescript, SiTailwindcss, SiExpress, SiFramer,
    SiFirebase
} from "react-icons/si";
// import { Card, CardContent } from "./Card";
import { BiLogoFirebase, BiLogoGit, BiLogoReact } from "react-icons/bi";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
// import {  } from 'react-icons/fa';
// import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiFramer } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


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

const SkillsAndServices = () => {
    return (<>

        <section id="skills" className="flex flex-col gap-12 px-6 py-24 bg-primary">
            <h2 className="text-3xl font-bold container mx-auto mb-6 text-center text-palete3">
                My Services
            </h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Development Card */}
                    <Card className="bg-palete2">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <FaReact className="w-6 h-6 text-purple-600" />
                            </div>
                            <CardTitle>Frontend Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-6">
                                <p className="text-white mb-6">
                                    Building responsive and interactive user interfaces with modern frameworks and libraries
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <FaReact /> React
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-500">
                                        <SiTypescript /> TypeScript
                                    </div>
                                    <div className="flex items-center gap-2 text-sky-400">
                                        <SiTailwindcss /> Tailwind
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Backend Development Card */}
                    <Card className="bg-palete2">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#E8E9F4] rounded-lg flex items-center justify-center mb-6">
                                <SiPhp className="w-6 h-6 text-[#474A8A]" />
                            </div>
                            <CardTitle>Backend Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-6">
                                <p className="text-white mb-6">
                                    Creating robust server-side applications, APIs, and database integrations.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 text-[#474A8A]">
                                        <SiPhp /> PHP
                                    </div>
                                    <div className="flex items-center gap-2 text-[#F05340]">
                                        <SiLaravel /> Laravel
                                    </div>

                                    <div className="flex items-center gap-2 text-blue-400">
                                        <SiMysql /> MySQL
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* UI/UX Design Card */}
                    <Card className="bg-palete2">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <SiFlutter className="w-6 h-6 text-blue-400" />
                            </div>
                            <CardTitle>Mobile Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-6">
                                <p className="text-white mb-6">
                                    I create beautiful and functional apps for iOS and Android using Flutter. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <SiFlutter /> Flutter
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <SiDart /> Dart
                                    </div>
                                    <div className="flex items-center gap-2 text-[#F5820D]">
                                        <SiFirebase /> Firebase
                                    </div>
                                    {/* <div className="flex items-center gap-2 text-blue-400">
                    <SiPhotoshop /> Photoshop
                  </div> */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* <div className="container mx-auto py-12"></div> */}
            <h2 className="text-3xl font-bold mb-6 container mx-auto text-center text-palete3">
                My Skills
            </h2>
            <div className="relative flex container mx-auto overflow-hidden group maskImage">
                <div className="flex flex-row gap-8 animate-marquee group-hover:[animation-play-state:paused]">
                    {skills.map((skill, id) => (
                        <div key={`first-${id}`} className="shrink-0">
                            <Card className="bg-white p-4 text-center w-full aspect-square flex flex-col justify-around items-center">
                                {skill.icon}
                            </Card>
                        </div>
                    ))}

                    {skills.map((skill, id) => (
                        <div key={`second-${id}`} className="shrink-0">
                            <Card className="bg-white p-4 text-center w-full aspect-square flex flex-col justify-around items-center">
                                {skill.icon}
                            </Card>
                        </div>
                    ))}
                    <div></div>
                </div>
            </div>
        </section>
    </>


    );
};

export default SkillsAndServices;
