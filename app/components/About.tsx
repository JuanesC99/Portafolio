'use client';

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about"
      className="py-20 bg-indigo-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Acerca de Mí
        </motion.h2>
        <motion.p 
          className="text-lg text-white leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Soy un desarrollador full stack con 1.5 años de experiencia en la creación de aplicaciones web robustas y escalables. Mi pasión radica en convertir ideas complejas en soluciones intuitivas y de alto rendimiento. Tengo experiencia en tecnologías front-end como React y Next.js, y en back-end con Node.js y bases de datos. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Habilidades Front-end</h3>
            <p className="text-gray-700">React, Next.js, Tailwind CSS, JavaScript, TypeScript, HTML, CSS</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Habilidades Back-end</h3>
            <p className="text-gray-700">Node.js, Express, Python, PostgreSQL, MongoDB</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">Herramientas y Otros</h3>
            <p className="text-gray-700">Git, Docker, RESTful APIs</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
