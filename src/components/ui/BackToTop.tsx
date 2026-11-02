'use client';

import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const { scrollY } = useScroll();
  const visible = scrollY > SCROLL_THRESHOLD;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="返回顶部"
      className="p5r-totop"
      data-visible={visible}
    >
      <Image src="/images/totop.webp" alt="" aria-hidden width={91} height={75} />
    </button>
  );
}
