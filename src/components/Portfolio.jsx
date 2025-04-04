import { Card } from "./Card";
import Button from "./Button";
import { useState } from "react";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">{project.name}</h2>
        <p className="mb-4 text-black">{project.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.additionalImages &&
            project.additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.name} Image ${index + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
        </div>
        <button
          onClick={onClose}
          className="bg-palete3 text-palete5 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "Lienda Market",
    description: `This is project 1`,
    img: "lienda-logo.jpeg",
    additionalImages: [
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
      "lienda-logo.jpeg",
    ],
  },
  {
    name: "Cloud Memory ",
    description: "This is project 2",
    img: "cloudmemory-logo.jpg",
  },
  {
    name: "Project 3",
    description: "This is project 3",
    img: "portfolio-3.jpg",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log("clicked");
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  return (
    <section id="portfolio" className="px-6 py-24">
      <h2 className="text-3xl font-bold  mb-6 w-3/5 mx-auto text-center text-palete3">
        Portfolio
      </h2>
      <div className="grid grid-cols-3 gap-4 w-3/5 mx-auto">
        {projects.map((project, i) => (
          <Card key={i} className="bg-gray-800 relative p-0 cursor-pointer">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-40 object-cover rounded-xl"
            />
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100"
              onClick={(e) => handleProjectClick(project)}
            >
              <div className="flex flex-col justify-end h-full">
                <div className="p-2 text-center rounded-b-xl  bg-[rgba(0,0,0,0.5)] text-white text-xl w-full">
                  {project.name}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-3/5 mx-auto">
        <Button className="mt-6 bg-palete3 text-palete5">View More</Button>
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;
