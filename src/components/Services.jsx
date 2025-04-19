import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiFramer } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const Services = () => {
  return (
    <section id="services" className="px-6 py-24 bg-secondary">
      <h2 className="text-3xl font-bold  mb-6 w-3/5 mx-auto text-center">
        My Services
      </h2>
      <div className=" w-3/5 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development Card */}
          <Card className="bg-palete1 hover:bg-palete3">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FaReact className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
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
                  <div className="flex items-center gap-2 text-white">
                    <TbBrandNextjs /> Next.js
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Backend Development Card */}
          <Card className="bg-palete1 hover:bg-palete3">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaNodeJs className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Creating robust server-side applications, APIs, and database integrations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-green-500">
                    <FaNodeJs /> Node.js
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <SiExpress /> Express
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <SiMongodb /> MongoDB
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <SiMysql /> MySQL
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UI/UX Design Card */}
          <Card className="bg-palete1 hover:bg-palete3">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <FaFigma className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>UI/UX Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Creating intuitive and visually appealing user interfaces and experiences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-red-400">
                    <FaFigma /> Figma
                  </div>
                  <div className="flex items-center gap-2 text-sky-400">
                    <SiTailwindcss /> Tailwind
                  </div>
                  <div className="flex items-center gap-2 text-pink-400">
                    <SiFramer /> Framer
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
    </section>
  );
};

export default Services;
