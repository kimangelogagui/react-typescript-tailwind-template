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
    image: '/project1.png',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A full-stack task manager built using the MERN stack with authentication, CRUD operations, and responsive UI.',
    image: '/project2.png',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'E-Commerce API',
    description:
      'A RESTful API designed with Node.js and Express, providing product management, user authentication, and order handling.',
    image: '/project3.png',
    tech: ['Node.js', 'Express', 'MongoDB'],
    link: '#',
  },
];

function Projects() {
  return (
    <section className="bg-primaryBg mt-20 flex justify-center px-6 py-10">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-4xl">
            Projects
          </h1>
          <p className="text-bodyTextColor mx-auto max-w-md">
            A collection of my favorite web development projects — built with
            modern frameworks, clean design, and functional UX.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondaryBg flex flex-col rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full rounded-t-xl object-cover"
              />
              <div className="flex flex-col space-y-3 p-5 text-center sm:text-left">
                <h2 className="text-headingTextColor text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-bodyTextColor text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primaryHoverBg/10 text-primaryHoverBg rounded-md px-2 py-1 text-xs font-medium"
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
                  className="text-primaryHoverBg mt-2 inline-block font-medium hover:underline"
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
