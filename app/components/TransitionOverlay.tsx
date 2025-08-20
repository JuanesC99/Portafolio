'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTransition } from './TransitionProvider';
import Image from 'next/image'; // Import Image component

const TransitionOverlay = () => {
  const { isTransitioning, targetSection, transitionImage, completeTransition } = useTransition();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTransitioning && targetSection) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Set a timeout that matches the exit animation duration
      timeoutRef.current = setTimeout(() => {
        const element = document.getElementById(targetSection.substring(1)); // Remove '#' from targetId
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        completeTransition();
      }, 800); // This duration should match the exit animation duration below
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTransitioning, targetSection, transitionImage, completeTransition]); // Added transitionImage to dependencies

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-50 bg-indigo-700 flex items-center justify-center text-white text-4xl font-bold overflow-hidden"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {transitionImage && (
            <Image 
              src={transitionImage}
              alt="Transition Background"
              layout="fill"
              objectFit="cover"
              className="absolute z-0 opacity-20"
            />
          )}
          <motion.span
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {targetSection ? targetSection.substring(1).toUpperCase() : ''}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
