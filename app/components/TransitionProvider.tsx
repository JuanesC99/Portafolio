'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface TransitionContextType {
  startTransition: (targetId: string, imageUrl?: string) => void;
  isTransitioning: boolean;
  targetSection: string | null;
  transitionImage: string | null; // Added for the image URL
  completeTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [transitionImage, setTransitionImage] = useState<string | null>(null); // State for image URL

  const startTransition = useCallback((targetId: string, imageUrl?: string) => {
    setIsTransitioning(true);
    setTargetSection(targetId);
    setTransitionImage(imageUrl || null); // Set image URL
  }, []);

  const completeTransition = useCallback(() => {
    setIsTransitioning(false);
    setTargetSection(null);
    setTransitionImage(null); // Clear image URL
  }, []);

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning, targetSection, transitionImage, completeTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};
