'use client';

import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    description: "Creación de aplicaciones web completas, desde el front-end hasta el back-end, utilizando las últimas tecnologías.",
    icon: "💻"
  },
  {
    id: 2,
    title: "Diseño UI/UX Responsivo",
    description: "Diseño de interfaces de usuario intuitivas y experiencias de usuario fluidas, adaptables a cualquier dispositivo.",
    icon: "🎨"
  },
  {
    id: 3,
    title: "Optimización y Rendimiento",
    description: "Mejora del rendimiento de aplicaciones existentes, optimización de código y bases de datos.",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Consultoría Técnica",
    description: "Asesoramiento y guía en la selección de tecnologías, arquitectura de software y mejores prácticas de desarrollo.",
    icon: "💡"
  },
];

const Services = () => {
  return (
    <motion.section 
      id="services" 
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
          Mis Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg flex flex-col items-center text-center transform transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-5xl mb-4 text-blue-600">{service.icon}</span>
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
