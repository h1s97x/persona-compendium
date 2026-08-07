'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const { scrollY } = useScroll();
  const visible = scrollY > SCROLL_THRESHOLD;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="返回顶部"
          className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-p5r-red rounded-full flex items-center justify-center shadow-lg hover:bg-p5r-red-hover transition-colors"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
