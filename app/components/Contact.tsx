'use client';

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
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
          Contacto
        </motion.h2>
        
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg">
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <label htmlFor="name" className="block text-left text-gray-700 text-sm font-bold mb-2">
                Nombre
              </label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                className="appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition duration-200 ease-in-out"
                placeholder="Tu Nombre"
                whileFocus={{ scale: 1.01, borderColor: '#3B82F6', boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                className="appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition duration-200 ease-in-out"
                placeholder="tu_correo@example.com"
                whileFocus={{ scale: 1.01, borderColor: '#3B82F6', boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-gray-700 text-sm font-bold mb-2">
                Mensaje
              </label>
              <motion.textarea 
                id="message" 
                name="message" 
                rows={6} 
                className="appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transform transition duration-200 ease-in-out"
                placeholder="Tu mensaje aquí..."
                whileFocus={{ scale: 1.01, borderColor: '#3B82F6', boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)" }}
              ></motion.textarea>
            </div>
            <motion.button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>

        <motion.div 
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/tu-perfil/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-200 transition duration-300"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={40} />
          </motion.a>
          <motion.a 
            href="https://github.com/JuanesC99/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-200 transition duration-300"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={40} />
          </motion.a>
          <motion.a 
            href="mailto:tu.correo@example.com" 
            className="text-white hover:text-red-200 transition duration-300"
            aria-label="Correo Electrónico"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={40} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
