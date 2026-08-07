'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScroll';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 bg-gray-800 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-p5r-red to-p5r-red-hover"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
}
