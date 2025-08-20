'use client';

import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.section 
      id="resume" 
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
          Mi Currículum (CV)
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Puedes descargar mi currículum en formato PDF o verlo directamente aquí.
          </p>
          <motion.a 
            href="/tu-curriculum.pdf" // Reemplaza con la ruta a tu archivo PDF real
            download
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar CV (PDF)
          </motion.a>
          {/* <div className="mt-8">
            <iframe 
              src="/tu-curriculum.pdf" // Reemplaza con la ruta a tu archivo PDF real
              width="100%" 
              height="600px" 
              style={{ border: 'none' }}
              title="Mi Currículum"
            ></iframe>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
