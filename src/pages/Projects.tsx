type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.',
    image: '/images/projects/1.jpg',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A full-stack task manager built using the MERN stack with authentication, CRUD operations, and responsive UI.',
    image: '/images/projects/2.jpg',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'E-Commerce API',
    description:
      'A RESTful API designed with Node.js and Express, providing product management, user authentication, and order handling.',
    image: '/images/projects/3.jpg',
    tech: ['Node.js', 'Express', 'MongoDB'],
    link: '#',
  },
];

function Projects() {
  return (
    <section className="bg-primaryBg flex justify-center px-6">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-5xl">
            Projects
          </h1>
          <p className="text-bodyTextColor mx-auto max-w-md">
            A collection of my favorite web development projects — built with
            modern frameworks, clean design, and functional UX.
          </p>
        </div>

        {/* Projects List - 1 per column */}
        <div className="flex w-full flex-col space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondaryBg rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image (16:9) */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center sm:text-left">
                <h2 className="text-headingTextColor text-2xl font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-bodyTextColor text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-tertiaryBg 0 text-primaryHoverBg rounded-md px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiaryBg font-bold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
