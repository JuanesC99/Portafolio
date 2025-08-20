'use client';

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section 
      id="home" 
      className="relative py-20 text-center bg-indigo-700 text-white min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* <div className="w-full h-full bg-grid-pattern"></div> */}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hola, soy Juan
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desarrollador Full Stack apasionado por crear experiencias web increíbles.
        </motion.p>
        <motion.a 
          href="#projects" 
          className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver mis proyectos
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Home;
