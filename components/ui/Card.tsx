'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
