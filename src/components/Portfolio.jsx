import { Card } from "./Card";
import Button from "./Button";
import { useState } from "react";
import { div } from "motion/react-client";

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
              <a href={image} target="_blank"><img
                key={index}
                src={image}
                alt={`${project.name} Image ${index + 1}`}
                className="w-full object-cover rounded"
              /></a>
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
    description: 'A fully functional e-commerce app with real-time inventory management.',
    type: `Mobile App`,
    img: "lienda/lienda-logo.jpg",
    additionalImages: [
      // "lienda/lienda-logo.jpg",
      "lienda/lienda1.jpg",
      "lienda/lienda2.jpg",
      "lienda/lienda3.jpg",
      "lienda/lienda4.jpg",
    ],
  },
  {
    name: "Cloud Memory ",
    type: "Mobile App",
    description: 'A cloud-based solution for secure data storage and retrieval.',
    img: "cloud-memory/cloudmemory-logo.jpg",
    additionalImages: [
      // "cloud-memory/cloudmemory-logo.jpg",
      "cloud-memory/cloudmemory1.png",
      "cloud-memory/cloudmemory2.png",
      "cloud-memory/cloudmemory3.png",
      "cloud-memory/cloudmemory4.png",
      "cloud-memory/cloudmemory5.png",
      "cloud-memory/cloudmemory6.png",
      "cloud-memory/cloudmemory7.png",
      "cloud-memory/cloudmemory8.png",
      "cloud-memory/cloudmemory9.png",
    ],
  },
  {
    name: "Travelwin",
    type: "Mobile App",
    description: 'An interactive travel and booking app with geolocation and user review features.',
    img: "travelwin/travelwin-logo.png",
    additionalImages: [
      // "travelwin/travelwin-logo.png",
      "travelwin/travelwin1.webp",
      "travelwin/travelwin2.webp",
      "travelwin/travelwin3.webp",
      "travelwin/travelwin4.webp",
      "travelwin/travelwin5.webp",
      "travelwin/travelwin6.webp",
      "travelwin/travelwin7.webp",

    ]
  },
  {
    name: "Blitz",
    type: "Mobile App",
    description: 'A mobile app for grocery shopping with a user-friendly interface and real-time order tracking.',
    img: "blitz/blitz-logo.png",
    additionalImages: [
      // "blitz/blitz-logo.png",
      "blitz/blitz1.webp",
      "blitz/blitz2.webp",
      "blitz/blitz3.webp",
      "blitz/blitz4.webp",


    ]
  },
  {
    name: "Weather Forecast",
    type: "Mobile & Web App",
    description: 'A weather forecast app with real-time weather data and alerts.',
    img: "weather/weather-logo.png",
    additionalImages: [
      "weather/weather1.jpg",
      "weather/weather2.jpg",
      "weather/weather3.jpg",
      "weather/weather4.png",
      "weather/weather5.png",
      "weather/weather6.png",
    ]
  },
  {
    name: "Personal Website",
    type: "Website",
    description: 'A personal website to showcase my projects and skills.',
    img: "portfolio/portfolio1.png",
    additionalImages: [
      "portfolio/portfolio1.png",
    ]
  },
  {
    name: "Sheraa",
    type: "Desktop App",
    description: 'A desktop application for managing and monitoring the shipping process.',
    img: "sheraa/sheraa-logo.png",
    additionalImages: [
      "sheraa/sheraa-logo.png",
      "sheraa/sheraa1.png",
      "sheraa/sheraa2.png",
      "sheraa/sheraa3.png",
      "sheraa/sheraa4.png",
      "sheraa/sheraa5.png",
      "sheraa/sheraa6.png",
      "sheraa/sheraa7.png",
    ],
  },
  // {
  //   name: "Whatsapp group number extractor",
  //   type: "Nodejs Script",
  //   img: "cloudmemory-logo.jpg",
  // },
  {
    name: "Soukuk",
    type: "Mobile App",
    description: 'a mobile app for gold trading and investment services.',
    img: "soukok/soukuk-logo.png",
  },
  {
    name: "Exmoney",
    type: "Mobile App",
    description: 'A mobile app for money transfer and payment services.',
    img: "exmoney/exmoney-logo.png",
  },
  {
    name: "Al-Ameen Chocolate",
    type: "Website",
    description: 'A website for Al-Ameen Chocolate to showcase their products and services.',
    img: "fadi/fadi1.jpg",
    additionalImages: [
      "fadi/fadi1.jpg",
      "fadi/fadi2.jpg",
      "fadi/fadi3.jpg",
      "fadi/fadi4.jpg",
    ]
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
    <section id="portfolio" className="flex flex-col gap-12 px-6 py-24">
      <h2 className="text-3xl font-bold  mb-6 container mx-auto text-center text-palete3">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto md:px-32 px-10">
        {projects.map((project, i) => (
          <div>
            <Card key={i} className="bg-gray-800 rounded-3xl relative p-0 cursor-pointer">
              <img
                src={project.img}
                alt={project.name}
                className="w-full aspect-square object-cover rounded-3xl"
              />
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100"
                onClick={(e) => handleProjectClick(project)}
              >
                {/* <div className="flex flex-col justify-end h-full">
                <div className="p-2 text-center rounded-b-[40px]  bg-[rgba(0,0,0,0.5)] text-white text-xl w-full">
                  {project.name}
                </div>
              </div> */}
              </div>
            </Card>
            <div className="flex flex-row  justify-between items-center">
              <div className="pt-4">
                <div className=" text-xl">{project.name}</div>
                <div className="text-l">{project.type}</div>
              </div>

            </div>


          </div>

        ))}
      </div>
      {/* <div className="container mx-auto">
        <Button className="mt-6 bg-palete3 text-palete5">View More</Button>
      </div> */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;
