'use client';

import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始化
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
