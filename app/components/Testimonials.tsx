'use client';

import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    quote: 'Trabajar con Juan fue una experiencia excepcional. Su habilidad para resolver problemas y su atención al detalle son inigualables.',
    author: 'Cliente Satisfecho',
    title: 'CEO, Empresa X'
  },
  {
    id: 2,
    quote: 'Juan aportó una perspectiva fresca y soluciones innovadoras a nuestro proyecto. Lo recomiendo encarecidamente para cualquier desarrollo web.',
    author: 'Colaborador Destacado',
    title: 'CTO, Startup Y'
  },
  {
    id: 3,
    quote: 'Su dedicación y conocimiento técnico son impresionantes. Entregó un producto final que superó nuestras expectativas.',
    author: 'Socio Comercial',
    title: 'Gerente de Proyectos, Agencia Z'
  },
];

const Testimonials = () => {
  return (
    <motion.section 
      id='testimonials' 
      className='py-20 bg-indigo-700'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto text-center px-4'>
        <motion.h2 
          className='text-4xl font-bold mb-12 text-white'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Testimonios
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className='bg-white p-6 rounded-lg flex flex-col items-center text-left transform transition-all duration-300 ease-in-out'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className='text-gray-700 italic mb-4 flex-grow'>"{testimonial.quote}"</p>
              <p className='text-blue-700 font-semibold'>{testimonial.author}</p>
              <p className='text-gray-500 text-sm'>{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;