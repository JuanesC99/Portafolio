'use client';

import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portafolio Personal",
    description: "Este es un portafolio personal creado con Next.js y Tailwind CSS. Incluye animaciones con Framer Motion y una estructura modular de componentes.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "E-commerce de Ropa",
    description: "Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y gestión de productos. Desarrollado con MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Sistema de Gestión de Tareas",
    description: "Una aplicación web para organizar y gestionar tareas diarias. Permite crear, actualizar y eliminar tareas, con notificaciones y recordatorios.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    githubLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-indigo-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 rounded-lg flex flex-col items-center text-left transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-purple-200 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-center gap-4 w-full">
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Proyecto
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
