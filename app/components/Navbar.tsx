'use client';

import { motion } from "framer-motion";
import { useTransition } from './TransitionProvider';

const Navbar = () => {
  const { startTransition } = useTransition();

  const handleNavLinkClick = (url: string, imageUrl?: string) => {
    startTransition(url, imageUrl);
  };

  return (
    <motion.nav 
      className="bg-indigo-700 p-4 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Portafolio de Juan
        </motion.h1>
        <ul className="flex space-x-6">
          {[ 
            ["Inicio", "#home", "/next.svg"],
            ["Acerca de", "#about", "/globe.svg"],
            ["Servicios", "#services", "/window.svg"],
            ["Proyectos", "#projects", "/file.svg"],
            ["Testimonios", "#testimonials", "/vercel.svg"],
            ["Blog", "#blog", "/next.svg"],
            ["Currículum", "#resume", "/globe.svg"],
            ["Contacto", "#contact", "/file.svg"],
            ["Planes", "#pricing", "/vercel.svg"],
          ].map(([title, url, imageUrl], index) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
            >
              <a 
                onClick={() => handleNavLinkClick(url, imageUrl)}
                className="cursor-pointer relative group text-lg"
              >
                {title}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
