'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <Image
            src="/images/p5r_icon.png"
            alt="Loading"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-[#E60012] text-2xl font-bold"
        >
          Loading...
        </motion.div>

        <div className="mt-8 w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#E60012] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
