'use client';

import { useScrollProgress } from '@/hooks/useScroll';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 80,
        pointerEvents: 'none',
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #e60012 0%, #e60012 55%, #d8b45f 100%)',
          boxShadow: '0 0 8px rgba(230, 0, 18, 0.8)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
