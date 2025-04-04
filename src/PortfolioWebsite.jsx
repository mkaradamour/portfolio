import React from 'react';
const Card = ({ children, className }) => (
    <div className={`rounded bg-gray-800 p-4 shadow ${className}`}>{children}</div>
  );
  const CardContent = ({ children }) => <div>{children}</div>;
  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  

const PortfolioWebsite = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header Section */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <div className="text-2xl font-bold text-yellow-400">ID</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none"
        />
      </header>

      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Ivan Dan"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-4xl font-bold text-yellow-400">Ivan Dan</h1>
          <p className="text-lg mt-2">Python Developer & ERPNext Consultant</p>
          <Button className="mt-6 bg-yellow-400 text-gray-900">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-12">
        <h2 className="text-3xl font-bold border-b border-gray-800 pb-2 mb-6">About</h2>
        <p className="text-gray-300">
          I have acquired and sharpened my skills in Python development and ERPNext consulting.
          I'm trustworthy, creative, and an effective communicator. I eagerly anticipate working
          on challenging projects to help organizations achieve their visions for personal growth.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-6">My Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            'Python',
            'Flutter',
            'Ubuntu',
            'ERPNext',
            'MongoDB',
            'HTML & CSS',
            'JavaScript',
            'Frappe',
            '.NET',
            'Flask',
            'MySQL',
            'AWS Server',
          ].map((skill) => (
            <Card key={skill} className="bg-gray-700 p-4 text-center">
              <CardContent>{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-12">
        <h2 className="text-3xl font-bold border-b border-gray-800 pb-2 mb-6">Portfolio</h2>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="bg-gray-800">
              <img
                src={`/portfolio-${i + 1}.jpg`}
                alt={`Portfolio ${i + 1}`}
                className="w-full h-40 object-cover rounded"
              />
            </Card>
          ))}
        </div>
        <Button className="mt-6 bg-yellow-400 text-gray-900">View More</Button>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-6">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">2021 - Senior Python Developer</h3>
            <p className="text-gray-300">
              Developed robust backend systems using Python. Optimized code and improved application performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">2021 - Python Developer</h3>
            <p className="text-gray-300">
              Collaborated with a team to design and implement scalable software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="px-6 py-12">
        <h2 className="text-3xl font-bold border-b border-gray-800 pb-2 mb-6">Testimonial</h2>
        <div className="flex items-center space-x-6">
          <img
            src="/testimonial.jpg"
            alt="Testimonial"
            className="w-24 h-24 rounded-full"
          />
          <p className="text-gray-300">
            "The design quality, flexibility, documentation, and support are absolutely excellent.
            Ivan Dan delivers exceptional results."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2 mb-6">Contact Me</h2>
        <div className="space-y-4">
          <p>Email: ivandan@email.com</p>
          <p>Phone: (201) 555-0124</p>
          <p>Location: Toledo, United States</p>
        </div>
        <div className="flex space-x-4 mt-6">
          {["linkedin", "twitter", "github"].map((platform) => (
            <a
              key={platform}
              href={`https://${platform}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400"
            >
              {platform.toUpperCase()}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-gray-500">Thanks for Scrolling</p>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
