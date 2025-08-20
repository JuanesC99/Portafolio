'use client';

import { motion } from 'framer-motion';

const blogPostsData = [
  {
    id: 1,
    title: "Primeros Pasos con Next.js y Tailwind CSS",
    summary: "Una guía rápida para configurar un proyecto moderno con Next.js y estilizarlo con Tailwind CSS.",
    date: "2023-01-15",
    link: "#"
  },
  {
    id: 2,
    title: "Introducción a Framer Motion para Animaciones en React",
    summary: "Explora cómo añadir animaciones fluidas y declarativas a tus componentes React con Framer Motion.",
    date: "2023-02-20",
    link: "#"
  },
  {
    id: 3,
    title: "Consejos para Optimizar el Rendimiento de tu Aplicación React",
    summary: "Mejora la velocidad y eficiencia de tus aplicaciones React con estos trucos y mejores prácticas.",
    date: "2023-03-10",
    link: "#"
  },
];

const Blog = () => {
  return (
    <motion.section 
      id="blog" 
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
          Mi Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white p-6 rounded-lg flex flex-col items-start text-left transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{post.title}</h3>
              <p className="text-gray-700 mb-3 flex-grow">{post.summary}</p>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 mt-auto"
              >
                Leer más
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
