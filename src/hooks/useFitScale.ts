'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 把固定宽度的官网画布等比缩放到容器宽度。
 * 官网各区（hero 1024 / 角色 1305 / 规格 1147）都是固定像素排版，
 * 统一用这个 hook 得到缩放比，再用 transform: scale() 套版，避免用百分比估算坐标。
 */
export function useFitScale(naturalWidth: number, maxScale = 1) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(maxScale);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setScale(Math.min(maxScale, width / naturalWidth));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [naturalWidth, maxScale]);

  return { ref, scale } as const;
}
